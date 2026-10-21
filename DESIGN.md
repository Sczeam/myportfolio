# DESIGN.md: Zaw Htike Aung, portfolio redesign (Oct 2026)

## Brief

- **Subject:** Zaw Htike Aung, full stack developer in Manchester, UK. Designs and builds; cares how
  a product feels as much as how it works. Full UK right to work.
- **Audience:** hiring managers, engineering leads and recruiters at product companies.
- **Job of the site:** get him hired full-time. In 3 seconds: name, "full stack developer,
  Manchester", proof he ships (One Click AI, 3,600+ users), how to email him.
- **Assets:** real screenshots of oneclickai.studio, moesilkandcotton.com, avenora.co.uk (captured
  Oct 2026), the Moethuzar admin screenshot, a real portrait. Facts from the CV, the One Click AI
  Confluence knowledge base and Jira, `docs/pcs.json` (Moethuzar), GitHub.
- **Language:** English, British spelling.

## Concepts considered

| | A. The shelf (personal) | B. The recap (material) | C. Checkpoints (process) |
|---|---|---|---|
| Idea | The portfolio is his bookcase: the three products he built stand as volumes beside the 17 books that taught him, filed by library call number | The site is a narrated recap of his work, with a Burmese/English subtitle track and a scroll timecode, like the videos One Click AI makes | Every section is a checkpointed pipeline stage that resumes where you left it, like his crash-safe video jobs |
| Anchor | his own reading list (he asked for it to be shown) + his three real products | One Click AI's core feature (voice-over + subtitles) | One Click AI's checkpoint recovery |
| Signature | spines lean with scroll and lift under the pointer; a project spine opens into its cover, which becomes the case page | subtitle bar narrates as you scroll, timecode ticks | stage stamps resolving as sections complete |
| Screenshot | a full bookcase of coloured cloth spines, three black volumes marked as his | subtitle over a frozen frame | pipeline diagram |
| O / F / Fe / P | 4 / 5 / 4 / 2 | 4 / 3 / 4 / 2 | 3 / 3 / 3 / 3 |

**Pick A.** It is the one thing he asked to show, it is impossible to move to another person
(his exact shelf, his exact products), and it yields a full rule system: spines, call numbers,
catalogue cards, contents pages, indexes, colophons. Steal from B for one detail: the One Click
AI case page quotes the product's own Burmese line in Myanmar script, with its English gloss.

## Concept card

```
Idea:        Zaw's portfolio is his bookcase: the products he built stand beside the books that taught him.
Metaphor:    a personal library: cloth spines, Dewey call numbers, catalogue cards, title pages,
             contents, a back-of-book index, a colophon.
Signature:   The shelf. Spines lean with scroll velocity (heavier books lean less) and rise under
             the pointer; pulling a black project volume opens its spine into a full-screen cover
             that becomes the case study (shared-element transition, motion.md).
Emotion:     standing at someone's bookcase and learning who they are from it. Curious, warm, exact.
Motion verb: "pulled from the shelf": tilt from the base, slide out upward, settle back upright.
Screenshot:  the hero bookcase: 20 real spines filed by call number, three black volumes
             under "Built", one blue book leaning out with a red ribbon, "Reading now".
```

## System

### Palette (named by role)

| Role | Hex | Notes |
|---|---|---|
| ground (paper) | `#F2F2EE` | cool neutral paper, deliberately not cream |
| ink | `#121212` | text, his own volumes' cloth, the shelf plank |
| muted | `#5C5C57` | 6.0:1 on ground |
| line | `rgb(18 18 18 / 0.14)` | hairlines |
| accent (ribbon) | `#C8102E` | ONLY the bookmark ribbon and the focus ring |
| curtain | `#121212` | the cover in transitions |

Spines are the real books. Each spine takes its colour, lettering colour and lettering style
(sans or spaced serif capitals) from that book's real cover (Open Library, Manning for one), and
each book carries its real front cover, hinged on the spine, shown when the book is pulled. His
three volumes are ink cloth with paper lettering; their covers are phone screenshots of the
live products. (Revised Oct 2026 at Zaw's request: real books replaced the Dewey colour key.)

The site itself stays paper and ink. Colour lives on the books, like a real room.

### Type

- **Archivo** (Google, variable `wdth` 62 to 125, `wght` 100 to 900): display and UI. Display is
  condensed (`wdth` 68, `wght` 760) like spine lettering; UI is normal width 400/500.
- **Literata** (Google, variable `opsz`, italic): the reading voice. Long-form case-study text,
  and every book title in italics, the way citations set titles.
- Scale: tokens `--t-mega` to `--t-xs` (globals.css). Display tracking -0.035em at xl, -0.045em
  at mega; leading 0.86 to 0.92. Body 17 to 18 px, leading 1.55, measure 62ch.

### Grid and rhythm

12 columns, gutter `clamp(16px, 2.2vw, 40px)`, outer margin = gutter. Three hang lines: col 1,
col 5, col 9. Section spacing moods: tight (hero to work), airy (about), full (case covers).

### Shape

Radius 0 everywhere. Books are rectangles; so is everything else.

### Motion language

- Eases: engine `ease.out` (expo.out) for entrances, `ease.inOut` for covers, `power3.out`
  for hover.
- Verb in practice: hover pulls the target up a few pixels and tilts it 1 to 2 degrees from its
  base; release settles it back. Catalogue cards slide up out of their drawer. Nav labels roll.
- Page transition: a cover swings shut over the page from the left edge (rotateY about the
  spine, with shading), then swings open on the new page. Project links use the spine-to-cover
  shared element instead.
- Idle: the shelf is the driver. Scroll velocity leans the books; pointer x lifts nearby spines;
  after 2.5 s with no input the shelf browses itself, lifting one book at a time in filing order
  while the caption names it; the red ribbon sways. Everything stops under reduced motion.
- Pull: on hover (tap on touch, focus for his volumes) a book slides up and turns 64 degrees to
  show its real front cover.

### Composition plan

```
HOME
[1 Poster + shelf]   name (t-mega, condensed)        | statement + email CTA (cols 9-12)
                     ||| |||||||||||||||||||||||  (20 spines, Dewey order)
                     ===================================== plank
                     Built 3          Read 16 · reading 1          caption of hovered spine
[2 Asymmetric pairs] "Built"  cover screenshot (cols 1-7) + catalogue card (cols 9-12), x3 alternating
[3 Statement]        portrait (cols 1-4) | statement t-l (cols 5-12) + facts in tabular figures
[4 Contents + Index] Contents (experience, dot leaders, years) | Index (skills -> volume numbers)
[5 Index list]       Reading: bibliography rows by call number, "Reading now" first
[6 Colophon finale]  "Email me" giant link, links, colophon small print

CASE /work/[slug]
[Cover]      full-viewport ink cover: call number, title (t-mega), subtitle (Literata italic)
[Title page] catalogue card: role, years, subjects (stack), live link
[Figure]     hero screenshot, full width
[Chapters]   sticky chapter number (cols 1-3) | text (cols 4-9) | margin notes (cols 10-12)
[Figures]    two or three screenshots with "Fig." captions
[Further reading] spines from the shelf
[Next volume] full-width band in ink, next title, spine-to-cover again

404: a shelf with one empty slot. "Nothing is filed at this call number."
```

### Genericness test

- A generic build would put a dark hero with a gradient and a 3-card project grid. Replaced by a
  bookcase whose colours are Dewey classes, which nobody else's shelf matches.
- A generic "books" idea would use cream paper and a serif (AI tell #1). Replaced with cool paper,
  a condensed grotesk for spines and Literata only where a reader would expect a book face.
- A generic case study uses eyebrow labels on every heading. Replaced by real book furniture:
  call numbers, contents, chapter numbers, figures, an index.

### The books are content, not decoration (Oct 2026, at Zaw's request)

- Hover (or keyboard focus) pulls a book and turns it to show its real cover. Click, Enter or a
  tap opens it as a two-page spread: cover on the left page, a short note in Zaw's voice on the
  right (what the book taught him, and where it shows up in his work, linked to the exact
  case-study chapter). Previous and Next turn through the whole shelf; arrow keys do too.
- The reading list rows open the same notes, so every note is reachable without the 3D shelf.
- The shelf is one tab stop; arrow keys move along the spines. The dialog is a native
  `<dialog>`: focus is trapped, Escape closes it and returns focus to the book.
- Covers load after the page load event, so they never compete with the first paint.
- Books on the right half of the screen turn the other way, so a cover never leaves the screen.

### Decisions

- No loader and no WebGL: the content is type and screenshots; the shelf intro is the first
  moment. Keeps mobile LCP on the h1 text.
- The h1 is never hidden for an intro (LCP). The spines rise; the name does not.
- Case pages are reading pages: their covers stay still at rest by decision. The shelf at the
  foot of each case page browses itself when idle.

## Assumptions to confirm with Zaw

1. Dewey call numbers are class-level (3 digits) and chosen by me; the page counts behind spine
   thickness are approximate and never displayed.
2. "Further reading" on each case page pairs books from his shelf with the project. It says
   "related", not "this book shaped the project". He should confirm or edit the pairs.
3. Avenora is described as "a web design and development studio". Confirm the relationship.
4. One Click AI copy makes no "solo" claim (removed at Zaw's request, Oct 2026).
