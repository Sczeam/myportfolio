'use client';
// The signature: a simulation of One Click AI's job pipeline that visitors can break.
// One driver owns the run (stage index, statuses, log) and every visual reads from it.
// "Crash the worker" kills the running stage; the retry resumes from the last checkpoint and
// redoes nothing. "Take a provider down" makes the next AI stage fall back to another provider.
// Runs on GSAP's clock, pauses off screen, and does not auto-run under reduced motion.
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '@/engine';
import { pipeline } from '@/data/site';

gsap.registerPlugin(ScrollTrigger);

type Status = 'queued' | 'running' | 'done' | 'failed' | 'fallback';
type Tone = 'plain' | 'done' | 'fail' | 'signal';
type Line = { id: number; t: string; text: string; tone: Tone };

const DURATION = [0.7, 1.5, 1.3, 1.4, 1.1, 0.8, 0.5];

// Reduced motion as a subscription, so server and client agree on the first render.
const query = '(prefers-reduced-motion: reduce)';
const subscribe = (cb: () => void) => { const m = matchMedia(query); m.addEventListener('change', cb); return () => m.removeEventListener('change', cb); };
const useReduced = () => useSyncExternalStore(subscribe, () => matchMedia(query).matches, () => false);

// The first frame: the next job, queued.
const QUEUED: Line[] = [{ id: -1, t: '  0.0', text: 'job 413 queued', tone: 'plain' }];

// The resting log under reduced motion: the last job, finished cleanly.
const RESTING: Line[] = [
  { id: -4, t: '  0.0', text: 'job 412 finished', tone: 'done' },
  { id: -3, t: '     ', text: '7 of 7 stages checkpointed', tone: 'plain' },
  { id: -2, t: '     ', text: 'retries: 0, redone stages: 0', tone: 'plain' },
];
const PROVIDERS: Record<string, [string, string]> = {
  transcribe: ['speech provider A', 'speech provider B'],
  script: ['LLM provider A', 'LLM provider B'],
  voice: ['voice provider A', 'voice provider B'],
};

export function Pipeline({ compact = false }: { compact?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const bars = useRef<(HTMLSpanElement | null)[]>([]);
  const total = useRef<HTMLSpanElement>(null);

  const [status, setStatus] = useState<Status[]>(() => pipeline.map(() => 'queued'));
  const [reused, setReused] = useState<boolean[]>(() => pipeline.map(() => false));
  const reduced = useReduced();
  const [log, setLog] = useState<Line[]>(QUEUED);
  const [job, setJob] = useState(413);
  const [attempt, setAttempt] = useState(1);
  const [phase, setPhase] = useState<'idle' | 'running' | 'crashed' | 'complete'>('idle');
  const [armed, setArmed] = useState(false);
  const [announce, setAnnounce] = useState('');

  // The run itself lives in refs so GSAP callbacks always see the latest state.
  const run = useRef({ i: 0, t0: 0, crashed: false, armed: false, call: null as gsap.core.Tween | null, fill: null as gsap.core.Tween | null, lineId: 0, auto: true, visible: true, runs: 0 });

  const clock = () => ((gsap.ticker.time - run.current.t0)).toFixed(1).padStart(4, ' ');
  const say = useCallback((text: string, tone: Tone = 'plain') => {
    const id = ++run.current.lineId;
    setLog((l) => [...l.slice(-4), { id, t: clock(), text, tone }]);
  }, []);
  const setOne = (i: number, s: Status) => setStatus((arr) => arr.map((v, k) => (k === i ? s : v)));
  const schedule = (delay: number, fn: () => void) => {
    run.current.call?.kill();
    run.current.call = gsap.delayedCall(delay, fn);
    if (!run.current.visible) run.current.call.pause();
  };
  const progress = (done: number) => {
    if (total.current) gsap.to(total.current, { scaleX: done / pipeline.length, duration: 0.5, ease: 'power3.out' });
  };

  const finishStage = (i: number) => {
    setOne(i, 'done');
    say(`checkpoint saved: ${pipeline[i].id}`, 'done');
    progress(i + 1);
    if (i < pipeline.length - 1) schedule(0.18, () => runStage(i + 1));
    else complete();
  };

  const runStage = (i: number) => {
    const r = run.current;
    r.i = i;
    const stage = pipeline[i];
    setOne(i, 'running');
    say(`${stage.id} started`);
    const bar = bars.current[i];
    let d = DURATION[i];
    if (r.armed && 'ai' in stage && stage.ai) {
      r.armed = false;
      setArmed(false);
      const [a, b] = PROVIDERS[stage.id];
      d += 0.8;
      schedule(0.7, () => {
        setOne(i, 'fallback');
        say(`${a} timed out`, 'fail');
        say(`routing ${stage.id} to ${b}`, 'signal');
        setAnnounce(`${a} timed out. Routed to ${b}.`);
        schedule(d - 0.7, () => finishStage(i));
      });
    } else {
      schedule(d, () => finishStage(i));
    }
    r.fill?.kill();
    if (bar) r.fill = gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: prefersReducedMotion() ? 0 : d, ease: 'none', paused: !r.visible });
  };

  const complete = () => {
    const r = run.current;
    setPhase('complete');
    say(`recap ready in ${clock().trim()}s${r.crashed ? ', 0 stages redone after the crash' : ''}`, 'done');
    setAnnounce(r.crashed ? 'Job finished. The crash cost no finished work.' : 'Job finished.');
    if (r.auto) schedule(3.6, start);
  };

  const start = useCallback(() => {
    const r = run.current;
    r.t0 = gsap.ticker.time;
    r.crashed = false;
    r.i = 0;
    bars.current.forEach((b) => b && gsap.set(b, { scaleX: 0 }));
    if (total.current) gsap.set(total.current, { scaleX: 0 });
    setStatus(pipeline.map(() => 'queued'));
    setReused(pipeline.map(() => false));
    setAttempt(1);
    if (r.runs++ > 0) setJob((j) => j + 1);
    setPhase('running');
    setLog([]);
    say('job queued');
    schedule(0.5, () => runStage(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const crash = () => {
    const r = run.current;
    if (phase !== 'running') {
      say(phase === 'crashed' ? 'already recovering: the retry is on its way' : 'nothing is running yet: crash lands while a stage runs', 'plain');
      return;
    }
    r.call?.kill();
    r.fill?.pause();
    const i = r.i;
    r.crashed = true;
    setOne(i, 'failed');
    setPhase('crashed');
    say(`worker lost during ${pipeline[i].id}`, 'fail');
    setAnnounce(`Worker crashed during ${pipeline[i].label}. Resuming from the last checkpoint.`);
    schedule(1.1, () => {
      setAttempt((a) => a + 1);
      setReused(pipeline.map((_, k) => k < i));
      say(i > 0 ? `retry: resuming from checkpoint ${pipeline[i - 1].id}` : 'retry: starting from upload', 'signal');
      if (i > 0) say(`reused ${i} finished stage${i > 1 ? 's' : ''}`, 'done');
      setPhase('running');
      runStage(i);
    });
  };

  const outage = () => {
    run.current.armed = true;
    setArmed(true);
    say('provider outage injected: next AI stage', 'fail');
  };

  // Start the loop, pause it off screen, and leave reduced motion with a finished run.
  useEffect(() => {
    const r = run.current;
    if (prefersReducedMotion()) {
      r.auto = false;
      bars.current.forEach((b) => b && gsap.set(b, { scaleX: 1 }));
      if (total.current) gsap.set(total.current, { scaleX: 1 });
      return;
    }
    const st = ScrollTrigger.create({
      trigger: root.current,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (s) => {
        r.visible = s.isActive;
        // The first job starts when the runner comes into view, so nobody arrives at a finished run.
        if (s.isActive && r.runs === 0) { gsap.delayedCall(0.35, start); return; }
        if (s.isActive) { r.call?.resume(); r.fill?.resume(); } else { r.call?.pause(); r.fill?.pause(); }
      },
    });
    return () => { st.kill(); r.call?.kill(); r.fill?.kill(); };
  }, [start]);

  const running = phase === 'running';
  // Reduced motion rests on the last finished job until the visitor runs one.
  const resting = reduced && phase === 'idle';
  const shown = resting ? pipeline.map((): Status => 'done') : status;
  const lines = resting ? RESTING : log;
  const done = shown.filter((s) => s === 'done').length;

  return (
    <div ref={root} className={`runner${compact ? ' runner--compact' : ''}`} data-phase={phase}>
      <div className="runner__head">
        <p className="runner__title">
          <span>One Click AI job runner</span>
          <span className="chip">simulation</span>
        </p>
        <p className="runner__meta mono">
          <span>job {resting ? job - 1 : job}</span>
          <span>attempt {attempt}</span>
          <span>{done}/{pipeline.length} saved</span>
        </p>
        <span className="runner__total" aria-hidden="true"><span ref={total} /></span>
      </div>

      <ol className="runner__stages" aria-label="Pipeline stages">
        {pipeline.map((s, i) => (
          <li key={s.id} className="stage" data-status={shown[i]} data-reused={reused[i] || undefined}>
            <span className="stage__mark" aria-hidden="true" />
            <span className="stage__label">{s.label}</span>
            <span className="stage__detail">{s.detail}</span>
            <span className="stage__state mono">
              {shown[i] === 'done' ? (reused[i] ? 'reused' : 'saved') : shown[i] === 'fallback' ? 'fallback' : shown[i]}
            </span>
            <span className="stage__bar" aria-hidden="true"><span ref={(el) => { bars.current[i] = el; }} /></span>
          </li>
        ))}
      </ol>

      <div className="runner__foot">
        <ol className="runner__log mono" aria-label="Job log">
          {lines.map((l) => (
            <li key={l.id} className={`tone-${l.tone}`}><span className="runner__t">{l.t}</span> {l.text}</li>
          ))}
        </ol>
        <div className="runner__controls">
          {reduced && (phase === 'complete' || phase === 'idle') ? (
            <button type="button" className="btn btn--signal" onClick={start}><span className="btn__fill" aria-hidden="true" /><span>Run a job</span></button>
          ) : (
            <button type="button" className="btn btn--fail" onClick={crash} aria-disabled={!running || undefined}>
              <span className="btn__fill" aria-hidden="true" /><span>Crash the worker</span>
            </button>
          )}
          <button type="button" className="btn" onClick={outage} disabled={armed}>
            <span className="btn__fill" aria-hidden="true" /><span>{armed ? 'Outage armed' : 'Take a provider down'}</span>
          </button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">{announce}</p>
    </div>
  );
}
