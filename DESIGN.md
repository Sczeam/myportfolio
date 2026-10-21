# DESIGN.md: Zaw Htike Aung, portfolio (v3, Oct 2026)

v2 (the bookcase) is retired at Zaw's request: the site's job is to get him hired as an engineer,
so engineering leads and the reading list becomes a short secondary section.

## Brief

- **Subject:** Zaw Htike Aung, full stack developer in Manchester (Laravel, React, TypeScript).
  Builds One Click AI, a live AI video product with 3,600+ users. Full UK right to work.
- **Audience:** engineering managers, tech leads and recruiters at product companies.
- **Job:** get hired full-time. In 3 seconds: name, role, location, and proof that he builds
  systems that hold up in production. Then: the work, the decisions behind it, how to email him.
- **Secondary:** what he reads, compact, below the engineering.

## Concepts considered

| | A. Checkpoints (material) | B. Design doc (formal) | C. Commit log (process) |
|---|---|---|---|
| Idea | The hero runs his real system: a simulated One Click AI job you can crash, and it resumes from its last checkpoint | The site is set as an RFC with diagrams that draw on scroll | His career as a git history you scrub through |
| Anchor | One Click AI's crash-safe, checkpointed pipeline with provider fallback | how he documents systems | his commit history |
| Signature | "Crash the worker": the run fails mid-stage, then resumes, redoing nothing | sequence diagrams drawing | commit scrubber |
| O / F / Fe / P | 4 / 5 / 4 / 2 | 3 / 4 / 4 / 3 | 3 / 3 / 4 / 4 |

**Pick A.** It shows, rather than claims, the engineering a hiring manager cares about, and it is
his actual design: no other portfolio can carry this demo.

## Concept card

```
Idea:        A portfolio that proves its claim: the hero runs a simulation of Zaw's job pipeline,
             and you can break it.
Metaphor:    a job runner's console: stages, checkpoints, retries, a log.
Signature:   "Crash the worker" and "Take a provider down" on a live pipeline. The run fails,
             logs why, and resumes from the last checkpoint (or falls back to another provider)
             without redoing finished work. Built as one driver (components/Pipeline.tsx).
Emotion:     the calm of a system that keeps working while you try to break it.
Motion verb: "step and lock": things advance in discrete steps and lock into place, like stages
             completing. Fills sweep left to right like progress.
Screenshot:  the hero mid-recovery: a red failed stage, green checkpoints before it, and the log
             line "resuming from checkpoint".
```

## System

### Palette

| Role | Hex | Use |
|---|---|---|
| ground | `#F4F5F3` | page |
| ink | `#0E0F12` | text, dark sections |
| muted | `#585B61` | secondary text (6.4:1 on ground) |
| line | `rgb(14 15 18 / 0.12)` | hairlines |
| signal | `#2448F5` | running state, primary actions, focus |
| done | `#14804F` | checkpoints saved |
| fail | `#D7362B` | failed stage, crash button |

Status colours only appear where they carry state (the pipeline, decisions). The page is ink on
ground with one signal blue.

### Type

- **Instrument Sans** (Google, variable `wght` 400 to 700, `wdth` 75 to 100): display and text.
  Display at `wdth` 75, weight 650, tracking -0.04em, leading 0.88.
- **Martian Mono** (Google, 400/500): only for machine output: the job log, stage timings,
  status chips, and code identifiers. Never for general labels.

### Grid and rhythm

12 columns, gutter `clamp(16px, 2vw, 32px)`. Hang lines: col 1, col 5, col 9. Section spacing
varies: tight after the hero, airy around the work, dense for skills.

### Shape

Radius 4px on interactive controls and the console; 0 on images and layout.

### Motion language

- Entrances: short left-to-right clip wipes (progress-like), 0.9 to 1.1 s, `expo.out`.
- Hover: primary buttons fill left to right; nav and inline links draw an underline left to right;
  work rows advance their arrow and fill a progress line.
- Page transition: a progress bar runs across the top while a panel wipes left to right with the
  route being loaded; then it wipes off to the right.
- Idle: the pipeline keeps running jobs on a loop, paused off screen and stopped under reduced
  motion (where it shows a finished run with every checkpoint saved).

### Composition plan

```
HOME
[Hero: poster + console] name (display), role line, statement, CTAs | full-width pipeline console
[Proof: data]            four real numbers in tabular figures
[Work: feature + index]  One Click AI as a large feature (screenshot + highlights);
                         Moethuzar and Avenora as large index rows with screenshot
[Decisions: sticky]      sticky heading left; problem / decision / result entries right
[Skills: table]          five groups, dense
[Experience: list]       role rows with years
[Reading: strip]         small covers row, opens notes (secondary)
[Contact: finale]        big "Email me", links, colophon

CASE
[Header] title, one-line summary, meta row, live link
[Hero image]
[Highlights] engineering bullets
[Chapters] sticky chapter number | text | margin notes; figures
[Related reading] small covers
[Next project] full-width band

404: a failed job: "Page not found. Nothing to resume." with a retry link home.
```

### Genericness test

- A generic developer portfolio is a dark hero, a gradient, "Hi, I'm…", and a grid of project
  cards with tech logos. Here the hero is a working demo of his real architecture, the projects
  lead with engineering decisions, and the palette is light with status colours that mean
  something.
- Mono is limited to machine output, so it reads as a log, not as a "developer aesthetic".

## Decisions

- No loader, no WebGL. LCP is the h1 text.
- The pipeline is a labelled simulation of One Click AI's stages, not live data.
- Reading stays on the home page as a compact strip and opens the same notes dialog; it is the
  last content section before contact.
- Case pages and the 404 may be still at rest by decision; their life is in hovers and the
  transitions. (The One Click AI case page runs the pipeline demo inside chapter 3.)

## Assumptions to confirm with Zaw

1. Pipeline stages are a simplified model of One Click AI (upload, transcribe, script, voice,
   cut, subtitles, deliver).
2. "13 months at Kewordal" counts Sep 2025 to Oct 2026.
3. Avenora is described as a web design and development studio.
