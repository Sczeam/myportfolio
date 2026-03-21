# Design System: Architectural Editorial

## 1. Creative North Star: "The Monolith Editorial"

This design system is built upon the intersection of brutalist structural integrity and high-fashion editorial grace. It rejects the "busy" nature of modern SaaS interfaces in favor of a "Monolith" approach: large, singular focal points, intentional voids of negative space, and a structural framing system that feels like a blueprint for a premium physical space.

The goal is to move beyond "user interface" and into "digital architecture." We achieve this through extreme typographic scale, asymmetrical balance that challenges the center-aligned status quo, and a motion system that feels like a camera lens slowly pulling focus.

---

## 2. Color & Material System

The palette is rooted in deep obsidian and bone-whites, creating a high-contrast environment that feels authoritative yet sophisticated.

### Palette Tokens

- **Surface (Background):** `#0E0F11` – The "void." Used for the base canvas.
- **On-Surface (Primary Text):** `#F3F0EA` – Warm parchment white. High legibility against dark depths.
- **Primary (Accent/Action):** `#7C8A9A` – Muted slate blue. Used for focus, interactive states, and architectural highlights.
- **Outline-Variant:** `#44474C` – The structural hairline color.

### Material Hierarchy (The Layering Principle)

Instead of traditional drop shadows, depth is achieved through three distinct architectural levels:

- **Level 0 (The Canvas):** Base `#0E0F11`. The ground upon which all elements sit.
- **Level 1 (Lifted Surface):** `surface_container_low` (`#1B1C1E`). Used for subtle differentiation of large content blocks.
- **Level 2 (Framed Inset):** `surface_container` (`#1F2022`). Used for interactive components like cards and inputs.

**The "Ghost Border" Rule:**
Structural framing is achieved through 1px borders using `outline_variant` at 20% opacity. Forbid 100% opaque borders. Boundaries should feel like light catching the edge of a glass pane, not a box drawn with a pen.

---

## 3. Typography: The Editorial Scale

Typography is our primary design element. We use a "High-Contrast" scale to create a sense of drama and hierarchy.

| Role              | Size (Range) | Font Family | Tracking     | Leading |
| :---------------- | :----------- | :---------- | :----------- | :------ |
| **Hero Display**  | 84px – 112px | Newsreader  | -0.04em      | 0.95    |
| **Major Title**   | 48px – 64px  | Newsreader  | -0.02em      | 1.1     |
| **Subheadline**   | 20px – 24px  | Manrope     | 0.02em       | 1.4     |
| **Body (Large)**  | 16px – 20px  | Manrope     | 0em          | 1.6     |
| **Label/Caption** | 11px – 12px  | Manrope     | 0.1em (Caps) | 1.2     |

**Editorial Intent:** Hero displays should often be asymmetrical—pushed to the far left or right of a container—to create a sense of "dynamic tension" against the negative space.

---

## 4. Grid, Spacing & Framing

This system utilizes an **Asymmetrical 12-Column Grid** with heavy outer margins.

- **Outer Margins:** Minimum `8.5rem` (Token 24) on Desktop to force focus toward the center or specific off-center focal points.
- **The "Structural Framing" Rule:** Use `1px` structural lines (`outline_variant`) to bisect the screen horizontally or vertically, mimicking architectural drafting lines.
- **Negative Space:** Forbid "compact" layouts. Sections must have a minimum vertical gutter of `7rem` (Token 20).

### Radius Scale

- **Large (16px):** Main content containers and image masks.
- **Medium (10px):** Primary buttons, cards, and input fields.
- **Small (6px):** Chips, tooltips, and small UI triggers.

---

## 5. Motion: Cinematic Reveal

Motion in this system is not a utility; it is a transition of state. We use "Cinematic Easing" to mimic the heavy, smooth movement of a physical camera.

- **Easing Token:** `cubic-bezier(0.16, 1, 0.3, 1)`
- **Timing Tokens:**
- **Hero Reveal:** 920ms (The slow entrance of the primary statement).
- **Signature Reveal:** 1100ms (Delayed, sweeping entrance of accent elements).
- **Content Reveal:** 560ms (Standard interaction feedback).

**Reveal Rules:**
All text elements must enter using a **Mask/Clip Reveal**. Elements should animate from a `Y-offset` of `20px` to `28px` while simultaneously transitioning from `opacity: 0` to `opacity: 1`. The effect should look like the text is emerging from behind a structural floor.

---

## 6. Components

### Buttons & Inputs

- **Primary CTA:** Semi-transparent `surface_tint` with a `backdrop-blur` of 12px. The text is `on_surface`. No solid background.
- **Secondary:** Ghost style. 1px border (`outline_variant` at 20%) with a hover state that increases border opacity to 60%.
- **Input Fields:** Level 2 Inset (`#1F2022`). Only a bottom-border reveal on focus.

### Cards & Lists

- **The "No-Divider" Rule:** Forbid the use of horizontal divider lines in lists. Use `1.7rem` (Spacing 5) of vertical padding and subtle background shifts (Surface to Surface-Container-Low) to define list items.
- **Media Cards:** Images must use a "Ken Burns" zoom effect (1.0 to 1.05 scale) on hover over 1200ms.

---

## 7. Do's & Don'ts

### Do

- **Do** embrace "uncomfortable" white space. It signals luxury.
- **Do** align text to the grid, but vary the column starting points for different sections (e.g., Header starts at Col 1, Body starts at Col 4).
- **Do** use Glassmorphism for floating navigation bars to allow the "monolithic" content to scroll beneath.

### Don't

- **Don't** use standard drop shadows. If depth is needed, use Tonal Layering (Surface → Surface-Low).
- **Don't** use 100% opaque, high-contrast borders. They "trap" the design and make it feel like a template.
- **Don't** use "Pop" animations. Motion must be slow, eased, and intentional.
