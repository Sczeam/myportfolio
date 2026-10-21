// All visible content lives here.
// Sources: Zaw's CV (Oct 2026), the One Click AI Product Knowledge Base (Confluence) and Jira,
// docs/pcs.json (Moethuzar), the live sites (screenshots captured Oct 2026) and GitHub.
//
// Assumptions (mirrored in DESIGN.md, confirm before launch):
// - Book call numbers are 3-digit Dewey classes chosen for the shelf; `pages` only sets spine
//   thickness and is approximate. Nothing on the site displays page counts.
// - Covers come from Open Library (Manning for Testing JavaScript Applications). Editions chosen
//   where unknown: Eloquent JavaScript 3rd edition, The Odyssey in Emily Wilson's translation,
//   The Art of Game Design 3rd edition.
// - `related` books on each project are suggested pairings ("further reading"), not claims about
//   how the project was built.
// - Avenora is described as a web design and development studio.

export const site = {
  name: 'Zaw Htike Aung',
  role: 'Full stack developer',
  url: 'https://www.zawhtikeaung.com',
  location: 'Manchester, UK',
  description:
    'Zaw Htike Aung is a full stack developer in Manchester. He built One Click AI, a live AI video product with 3,600+ users, and is looking for a full-time role.',
  email: 'zawhtikeaung19@gmail.com',
  github: 'https://github.com/Sczeam',
  linkedin: 'https://www.linkedin.com/in/zaw-htike-aung/',
  status: 'Open to full-time roles',
  rightToWork: 'Full UK right to work, no sponsorship needed',
};

// ---------------------------------------------------------------- the shelf

export type DeweyClass = '000' | '100' | '500' | '600' | '700' | '800';

export const classes: Record<DeweyClass, { name: string }> = {
  '000': { name: 'Computing' },
  '100': { name: 'Mind' },
  '500': { name: 'Science' },
  '600': { name: 'Technology and business' },
  '700': { name: 'Arts and games' },
  '800': { name: 'Literature' },
};

export type Book = {
  call: string; // 3-digit Dewey class
  cutter: string; // first three letters of the author's surname, as libraries file them
  title: string;
  spine: string; // what fits on the spine
  author: string;
  cls: DeweyClass;
  subject: string; // the class caption
  cloth: string; // spine colour, sampled from the real cover
  ink: string; // spine lettering colour
  face: 'sans' | 'serif'; // spine lettering style
  cover: string; // real front cover (Open Library, or the publisher for DAC)
  ratio: number; // cover width / height
  pages: number; // approximate, drives spine thickness only
  height: number; // 0..1 of the shelf
  reading?: boolean;
  note: string; // what I took from it, in my words
  usedIn?: { slug: string; chapter: number }; // where the idea shows up in my work
};

// Filed in call-number order, then by author.
export const books: Book[] = [
  { call: '005', cutter: 'DAC', title: 'Testing JavaScript Applications', spine: 'Testing JavaScript Applications', author: 'Lucas da Costa', cls: '000', subject: 'Computer programming', cloth: '#21545a', ink: '#f4f3ee', face: 'sans', cover: '/books/dac.webp', ratio: 0.732, pages: 576, height: 0.93, note: 'Tests exist to make change safe, not to fill a coverage report. Since this book I write the test for the failure I’m most afraid of first: a duplicated upload, a job that dies halfway through.', usedIn: { slug: 'one-click-ai', chapter: 4 } },
  { call: '005', cutter: 'HAV', title: 'Eloquent JavaScript', spine: 'Eloquent JavaScript', author: 'Marijn Haverbeke', cls: '000', subject: 'Computer programming', cloth: '#f5d11a', ink: '#141414', face: 'sans', cover: '/books/hav.webp', ratio: 0.749, pages: 450, height: 0.9, note: 'The book that made JavaScript feel like a language instead of a bag of browser tricks. Building the small interpreter near the end is where scope and closures stopped being vocabulary and started being tools.' },
  { call: '005', cutter: 'MAR', title: 'Clean Architecture', spine: 'Clean Architecture', author: 'Robert C. Martin', cls: '000', subject: 'Computer programming', cloth: '#24292e', ink: '#f4f3ee', face: 'sans', cover: '/books/mar.webp', ratio: 0.706, pages: 432, height: 0.88, note: 'The useful idea isn’t the circles diagram. It’s that dependencies should point at the rules that change least. That’s why One Click AI reaches its speech, script and voice providers through adapters: swapping a provider is a new class, not a rewrite.', usedIn: { slug: 'one-click-ai', chapter: 3 } },
  { call: '005', cutter: 'SIM', title: 'You Don’t Know JS Yet', spine: 'You Don’t Know JS Yet', author: 'Kyle Simpson', cls: '000', subject: 'Computer programming', cloth: '#f7df1e', ink: '#141414', face: 'sans', cover: '/books/sim.webp', ratio: 0.666, pages: 180, height: 0.84, note: 'Simpson won’t let you settle for knowing what JavaScript does without knowing why. The chapters on scope pay off every time I read someone else’s React hooks and need to know exactly what a closure captured.' },
  { call: '005', cutter: 'SPR', title: 'Think Like a Programmer', spine: 'Think Like a Programmer', author: 'V. Anton Spraul', cls: '000', subject: 'Computer programming', cloth: '#f3dc4a', ink: '#141414', face: 'sans', cover: '/books/spr.webp', ratio: 0.813, pages: 260, height: 0.9, note: 'Problem solving treated as a skill you practise: restate the problem, solve a smaller version, then grow it. It’s still my routine for a bug I don’t understand yet.' },
  { call: '005', cutter: 'WEN', title: 'A Common-Sense Guide to Data Structures and Algorithms in Python, Volume 1', spine: 'Common-Sense Guide to DSA', author: 'Jay Wengrow', cls: '000', subject: 'Computer programming', cloth: '#1d1b3c', ink: '#f4f3ee', face: 'sans', cover: '/books/wen.webp', ratio: 0.832, pages: 500, height: 0.92, reading: true, note: 'I’m reading it to put names and numbers on things I already do by instinct: why a set lookup beats scanning a list, when recursion is the clearer answer. It has me counting operations before I nest one loop inside another.' },
  { call: '005', cutter: 'WIN', title: 'Software Engineering at Google', spine: 'Software Engineering at Google', author: 'Titus Winters, Tom Manshreck and Hyrum Wright', cls: '000', subject: 'Computer programming', cloth: '#f5f4f1', ink: '#141414', face: 'sans', cover: '/books/win.webp', ratio: 0.762, pages: 600, height: 0.95, note: 'One line reframed the job for me: software engineering is programming integrated over time. Every shortcut is a bet on who changes the code next. It’s why the risky paths in One Click AI have regression tests running in CI.', usedIn: { slug: 'one-click-ai', chapter: 4 } },
  { call: '006', cutter: 'FRO', title: 'Atomic Design', spine: 'Atomic Design', author: 'Brad Frost', cls: '000', subject: 'Web design', cloth: '#ece4c8', ink: '#141414', face: 'sans', cover: '/books/fro.webp', ratio: 0.633, pages: 193, height: 0.8, note: 'Interfaces as systems of small parts, from atoms up to pages. On Moethuzar the store and the admin are built from the same parts, so the admin never feels like the cheap side of the product.', usedIn: { slug: 'moethuzar', chapter: 5 } },
  { call: '153', cutter: 'LEV', title: 'A Field Guide to Lies', spine: 'A Field Guide to Lies', author: 'Daniel J. Levitin', cls: '100', subject: 'Thinking and reasoning', cloth: '#f4f2ee', ink: '#9e1b22', face: 'serif', cover: '/books/lev.webp', ratio: 0.637, pages: 320, height: 0.86, note: 'A habit worth stealing: before believing a number, ask how it was collected and what it leaves out. I read product dashboards, my own included, with more suspicion since.' },
  { call: '158', cutter: 'VOS', title: 'Never Split the Difference', spine: 'Never Split the Difference', author: 'Chris Voss with Tahl Raz', cls: '100', subject: 'Applied psychology', cloth: '#d32f1e', ink: '#fff4dc', face: 'sans', cover: '/books/vos.webp', ratio: 0.66, pages: 288, height: 0.89, note: 'Labelling (“it sounds like you’re worried about…”) works as well in a requirements call as in a hostage negotiation. Most scope arguments end once the other side feels heard.' },
  { call: '519', cutter: 'ROW', title: 'Statistics Without Tears', spine: 'Statistics Without Tears', author: 'Derek Rowntree', cls: '500', subject: 'Probability and statistics', cloth: '#e8762b', ink: '#141414', face: 'sans', cover: '/books/row.webp', ratio: 0.646, pages: 200, height: 0.78, note: 'The gentlest way back into statistics I know: sampling, spread and significance without the algebra wall. Enough to tell a real change in a metric from noise.' },
  { call: '620', cutter: 'BRO', title: 'The Design of Design', spine: 'The Design of Design', author: 'Frederick P. Brooks Jr.', cls: '600', subject: 'Engineering design', cloth: '#1b1b1b', ink: '#e9e9e6', face: 'serif', cover: '/books/bro.webp', ratio: 0.686, pages: 448, height: 0.91, note: 'Brooks takes apart the idea that requirements can be finished before design starts: you find out what you want by designing it. It’s why I build in thin vertical slices and show them early.', usedIn: { slug: 'moethuzar', chapter: 2 } },
  { call: '650', cutter: 'AAK', title: 'Humor, Seriously: Why Humor Is a Secret Weapon in Business and Life', spine: 'Humor, Seriously', author: 'Jennifer Aaker and Naomi Bagdonas', cls: '600', subject: 'Business', cloth: '#3f8fb4', ink: '#ffe14d', face: 'sans', cover: '/books/aak.webp', ratio: 0.662, pages: 272, height: 0.85, note: 'Its case is that lightness signals confidence, not a lack of seriousness. A team that can laugh at a failed deploy is usually the one that fixes it fastest.' },
  { call: '794', cutter: 'SCH', title: 'The Art of Game Design', spine: 'The Art of Game Design', author: 'Jesse Schell', cls: '700', subject: 'Games', cloth: '#f4f2ef', ink: '#c8202b', face: 'sans', cover: '/books/sch.webp', ratio: 0.81, pages: 600, height: 0.94, note: 'Schell’s lenses are questions you hold up to a design, like what someone feels in their first minute. I ask that one of every onboarding flow, including the first screen of this site.' },
  { call: '813', cutter: 'HER', title: 'Dune', spine: 'Dune', author: 'Frank Herbert', cls: '800', subject: 'American fiction', cloth: '#1f1b14', ink: '#eadfc4', face: 'sans', cover: '/books/her.webp', ratio: 0.634, pages: 620, height: 0.83, note: 'A novel about systems: ecology, politics and religion all pulling on each other, where no fix comes without side effects. Surprisingly good preparation for working in a monolith.' },
  { call: '883', cutter: 'HOM', title: 'The Odyssey', spine: 'The Odyssey', author: 'Homer', cls: '800', subject: 'Classical Greek epic', cloth: '#e9e4d6', ink: '#23395b', face: 'serif', cover: '/books/hom.webp', ratio: 0.688, pages: 540, height: 0.87, note: 'Emily Wilson’s plain, quick translation makes a story nearly 3,000 years old read like it was written last year. Still the best story about taking the long way home.' },
  { call: '895', cutter: 'LIU', title: 'The Three-Body Problem', spine: 'The Three-Body Problem', author: 'Cixin Liu', cls: '800', subject: 'Chinese fiction', cloth: '#284868', ink: '#f2f2ee', face: 'sans', cover: '/books/liu.webp', ratio: 0.665, pages: 400, height: 0.84, note: 'A physics problem with no stable solution becomes the engine of a story the size of a civilisation. A good reminder that some systems can’t be predicted, only watched closely.' },
];

export const bookByCutter = (cutter: string) => books.find((b) => b.cutter === cutter)!;

// ---------------------------------------------------------------- the volumes he built

export type Figure = { src: string; alt: string; caption: string; width: number; height: number; phone?: boolean };
export type Chapter = { title: string; text: string[]; notes?: string[]; list?: string[] };

export type Project = {
  slug: string;
  vol: number;
  title: string;
  subtitle: string; // one sentence: what was made, for whom
  years: string;
  role: string;
  client: string;
  url: string;
  urlLabel: string;
  subjects: string[]; // the stack, set as catalogue subject headings
  summary: string; // the catalogue card note
  facts: { value: string; label: string }[];
  cover: Figure;
  chapters: Chapter[];
  figures: Figure[];
  related: string[]; // book cutters, "further reading"
  spineHeight: number;
};

export const projects: Project[] = [
  {
    slug: 'one-click-ai',
    vol: 1,
    title: 'One Click AI',
    subtitle: 'An AI video suite that turns a source video into a Burmese movie recap: voice-over, edit and subtitles in one upload.',
    years: '2026 to now',
    role: 'Full stack engineer. I work across the whole product: the React interface, the Laravel APIs, the AI pipeline, payments and CI.',
    client: 'AI Code Lab',
    url: 'https://oneclickai.studio',
    urlLabel: 'oneclickai.studio',
    subjects: ['Laravel', 'React', 'TypeScript', 'Inertia.js', 'PostgreSQL', 'Laravel Horizon', 'Filament', 'FFmpeg', 'Pest', 'GitHub Actions'],
    summary:
      'A live product for Myanmar creators. Upload a video, choose a voice and subtitle style, download a recap ready for TikTok, Reels and Shorts.',
    facts: [
      { value: '3,600+', label: 'registered users' },
      { value: '30 min', label: 'longest source video on VVIP' },
      { value: '5', label: 'creator tools shipped' },
    ],
    cover: { src: '/work/one-click-ai/cover.webp', alt: 'The One Click AI home page: a Burmese headline offering Movie Recap videos with Myanmar voice and subtitles, next to a sample recap with a Burmese subtitle.', caption: 'oneclickai.studio, October 2026.', width: 1440, height: 900 },
    chapters: [
      {
        title: 'The problem',
        text: [
          'Movie recaps are one of the biggest formats for creators in Myanmar. Making one means writing a script, recording a Burmese voice-over, cutting the video to match it and timing subtitles by hand. Plenty of creators have the ideas but not the editing skills, and a single recap can eat an evening.',
          'One Click AI, from AI Code Lab, collapses that into one upload. The home page says it plainly: no editing skills needed, upload a source and click once.',
        ],
        notes: ['The site is written in Burmese for its audience. The headline reads, roughly, “Create Movie Recap videos with Myanmar voice and subtitles.”'],
      },
      {
        title: 'What I built',
        text: [
          'A Laravel and React/TypeScript application. A creator uploads a source video, picks a voice and subtitle settings, and follows live progress until the recap is ready: Burmese narration, an edit cut to the narration, subtitle timing, an SRT file and, on VVIP, styled Myanmar subtitles burned into the video.',
          'Around Movie Recap I added the tools creators asked for next: a thumbnail generator, a free video splitter, a personal voice library with voice cloning, and a text-to-speech tool.',
        ],
        list: ['Movie Recap', 'Thumbnail Generator', 'Video Splitter', 'Voice Library and voice cloning', 'Text to Speech'],
      },
      {
        title: 'A pipeline that survives failure',
        text: [
          'Every recap runs through speech recognition, LLM script writing and text-to-speech. Each step sits behind a provider adapter that returns structured responses, and routing falls back to another provider automatically when one fails.',
          'Processing a long video takes minutes, and servers restart. Background jobs checkpoint every stage, isolate each run and reuse outputs that already finished, so an interrupted job recovers instead of starting over.',
        ],
        notes: ['Real bugs closed along the way: speech-to-text word timestamps that let narration run ahead of the original audio, corrupted transcripts on some Chinese sources, and videos with no audio track slipping into the queue.'],
      },
      {
        title: 'Payments, operations and tests',
        text: [
          'Subscription checkout uses signed webhooks with duplicate-event protection, tested across renewals, cancellations and delayed payments. A Filament admin lets the team manage 3,600+ users, change plans, adjust credits and safely resume failed runs.',
          'Releases are guarded by Pest and JavaScript regression tests for uploads, duplicate processing and crash recovery, running in GitHub Actions on every change.',
        ],
      },
      {
        title: 'Where it is now',
        text: [
          'One Click AI is live at oneclickai.studio with more than 3,600 registered users on VIP and VVIP plans. I am still building it: the latest work added voice cloning on a GPU worker and a text-to-speech tool with cost safeguards.',
        ],
      },
    ],
    figures: [
      { src: '/work/one-click-ai/steps.webp', alt: 'Three numbered steps in Burmese: choose a source, upload and pick settings, download and post.', caption: 'The whole workflow, as the product explains it: source, settings, download.', width: 1440, height: 540 },
      { src: '/work/one-click-ai/tools.webp', alt: 'A grid of tool cards: Movie Recap Generator, Thumbnail Generator, Video Splitter, Knowledge Video and Voice Cloning, each tagged with its plan.', caption: 'The creator tools, each tagged with the plan that includes it.', width: 1440, height: 720 },
      { src: '/work/one-click-ai/phone.webp', alt: 'The One Click AI home page on a phone, with full-width Burmese buttons.', caption: 'Most creators arrive on a phone, from Messenger or TikTok.', width: 780, height: 1688, phone: true },
    ],
    related: ['MAR', 'WIN', 'DAC'],
    spineHeight: 0.98,
  },
  {
    slug: 'moethuzar',
    vol: 2,
    title: 'Moethuzar',
    subtitle: 'A fashion store built as a modular monolith: a calm storefront on top, dependable checkout, admin and async workflows underneath.',
    years: '2026',
    role: 'Full stack developer. Product, interface, architecture and operations.',
    client: 'Moe Thuzar, a fashion label in Myanmar',
    url: 'https://moesilkandcotton.com',
    urlLabel: 'moesilkandcotton.com',
    subjects: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase Auth', 'Cloudflare R2', 'Upstash QStash', 'Vitest'],
    summary:
      'Vintage-inspired everyday wear, sold online in Myanmar. Cash on delivery in Yangon, prepaid transfer with payment-proof review everywhere else.',
    facts: [
      { value: '247', label: 'commits over three months' },
      { value: '8', label: 'core domains modelled' },
      { value: '2', label: 'surfaces: store and admin' },
    ],
    cover: { src: '/work/moethuzar/cover.webp', alt: 'The Moe Thuzar store home page: a model in a white dress on a dark set, with the headline New season favourites.', caption: 'moesilkandcotton.com, October 2026.', width: 1440, height: 900 },
    chapters: [
      {
        title: 'The problem',
        text: [
          'Moe Thuzar needed more than a storefront. The shop had to handle variants, stock, promotions, guest and signed-in customers, local payment rules and order tracking, and the team needed tools to run all of it.',
          'Payments in Myanmar are often manual: Yangon customers pay cash on delivery, others transfer money and upload proof. Checkout had to respect both.',
        ],
      },
      {
        title: 'How it is organised',
        text: [
          'I built it as a domain-oriented modular monolith. API routes stay thin: parsing, auth, validation, error mapping. Services own the use cases and the transactions. Domain modules hold pure rules. Repositories appear only where a query earned one.',
          'Inventory lives at the variant level, which is where it belongs for clothing: size and colour change what is in stock.',
        ],
        list: ['Catalogue, products, variants, images', 'Cart and checkout', 'Orders and order history', 'Promotions and discount rules', 'Shipping rules and transfer methods', 'Inventory logs', 'Wishlist write model, read model and outbox'],
      },
      {
        title: 'Checkout without duplicates',
        text: [
          'Checkout validates the cart, confirms stock, resolves shipping, applies promotions, chooses the payment policy for the zone and creates the order inside one transaction. An idempotency key means a retry or a double tap cannot create a second order.',
          'Prices are snapshotted on the order, so a later price change never rewrites what someone paid.',
        ],
        notes: ['Customer context is treated as a property of the request, not a split in the database, so guest and signed-in journeys share the same services.'],
      },
      {
        title: 'A wishlist you can replay',
        text: [
          'Wishlist writes update the canonical table and record an outbox event in the same transaction. QStash delivers the event to a projector that updates the read model, and the projector is idempotent. If delivery fails, the view can be rebuilt from the source of truth.',
        ],
      },
      {
        title: 'Admin as a product',
        text: [
          'Staff manage the catalogue, variants, stock, promotions, transfer methods and orders in an admin that got the same care as the storefront. Rate limiting, request IDs and structured error envelopes keep the system observable.',
        ],
      },
    ],
    figures: [
      { src: '/work/moethuzar/catalogue.webp', alt: 'The Moe Thuzar product grid: three dresses with stock labels, prices in kyat and wishlist hearts.', caption: 'Stock labels come straight from variant-level inventory.', width: 1440, height: 900 },
      { src: '/work/moethuzar/admin.webp', alt: 'The Moethuzar admin catalogue table listing products with status, category, price and inventory.', caption: 'The admin catalogue: status, price and stock in one table.', width: 1899, height: 905 },
      { src: '/work/moethuzar/phone.webp', alt: 'The Moe Thuzar store on a phone.', caption: 'The store on a phone, where most orders start.', width: 780, height: 1688, phone: true },
    ],
    related: ['MAR', 'FRO', 'BRO'],
    spineHeight: 0.9,
  },
  {
    slug: 'avenora',
    vol: 3,
    title: 'Avenora',
    subtitle: 'The website for Avenora, a web design and development studio, designed and built from the first sketch to launch.',
    years: '2025',
    role: 'Designer and developer.',
    client: 'Avenora',
    url: 'https://avenora.co.uk',
    urlLabel: 'avenora.co.uk',
    subjects: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
    summary:
      'A studio site that has to sell craft by showing it: oversized condensed type, a six-step process and almost nothing else.',
    facts: [
      { value: '6', label: 'steps in the published process' },
      { value: '3', label: 'services: design, development, full stack' },
      { value: '2', label: 'versions: launch and redesign' },
    ],
    cover: { src: '/work/avenora/cover.webp', alt: 'The Avenora home page: the headline We built to be remembered in huge condensed capitals on a pale background.', caption: 'avenora.co.uk, October 2026.', width: 1440, height: 900 },
    chapters: [
      {
        title: 'The brief',
        text: [
          'A small studio needed a site that proves its craft before anyone reads a word. The answer was restraint: a pale page, one huge headline, monospaced detail and motion that waits for you to scroll.',
        ],
      },
      {
        title: 'What I built',
        text: [
          'I designed the layouts and built the site with Next.js, TypeScript and Tailwind CSS, using shadcn/ui components and Framer Motion for the scroll-led reveals. The process section walks a client through six steps, from the first conversation to post-launch support.',
          'I later rebuilt it as a redesign, keeping the content and tightening the type and motion.',
        ],
        list: ['Lead and discovery', 'Proposal and contract', 'Planning and strategy', 'Design and development', 'Launch and handover', 'Post-launch support'],
      },
    ],
    figures: [
      { src: '/work/avenora/process.webp', alt: 'The Our process section: large condensed heading on the left, numbered steps in monospaced type on the right.', caption: 'The process section: the steps a client actually goes through.', width: 1440, height: 900 },
      { src: '/work/avenora/phone.webp', alt: 'The Avenora home page on a phone.', caption: 'The headline recomposed for a phone.', width: 780, height: 1688, phone: true },
    ],
    related: ['FRO', 'BRO', 'AAK'],
    spineHeight: 0.84,
  },
];

// ---------------------------------------------------------------- contents and index

export const contents = [
  { title: 'One Click AI', detail: 'Full stack engineer', place: 'oneclickai.studio', years: '2026 to now', href: '/work/one-click-ai/' },
  { title: 'Kewordal', detail: 'Frontend developer, internship', place: 'Remote', years: '2025 to 2026', note: 'Shipped responsive React interfaces from Figma for customer-facing learning products, wired them to REST APIs with real loading, empty and error states, and wrote Jest and React Testing Library tests.' },
  { title: 'University of Portsmouth', detail: 'BSc Computer Software Engineering, 2:1', place: 'Portsmouth', years: '2022 to 2024' },
  { title: 'Edinburgh Napier University', detail: 'BSc Computing', place: 'Edinburgh', years: '2021 to 2022' },
];

// Back-of-book index: each skill points at the volumes where it was used.
export const skillIndex: { term: string; vols?: number[]; see?: string }[] = [
  { term: 'Async job pipelines', vols: [1, 2] },
  { term: 'Checkpoint recovery', vols: [1] },
  { term: 'Cloudflare R2', vols: [2] },
  { term: 'FFmpeg', vols: [1] },
  { term: 'Filament', vols: [1] },
  { term: 'Framer Motion', vols: [3] },
  { term: 'GitHub Actions', vols: [1] },
  { term: 'GSAP', see: 'this site' },
  { term: 'Idempotent webhooks', vols: [1] },
  { term: 'Idempotent order creation', vols: [2] },
  { term: 'Inertia.js', vols: [1] },
  { term: 'Jest and React Testing Library', see: 'Kewordal' },
  { term: 'Laravel and PHP', vols: [1] },
  { term: 'Multi-provider LLM adapters', vols: [1] },
  { term: 'Next.js', vols: [2, 3] },
  { term: 'Pest', vols: [1] },
  { term: 'PostgreSQL', vols: [1, 2] },
  { term: 'Prisma', vols: [2] },
  { term: 'Python', see: 'Reading now' },
  { term: 'React', vols: [1, 2, 3] },
  { term: 'Supabase Auth', vols: [2] },
  { term: 'Tailwind CSS', vols: [3] },
  { term: 'TypeScript', vols: [1, 2, 3] },
  { term: 'Upstash QStash', vols: [2] },
];
