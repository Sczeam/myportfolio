````markdown
# Design System Specification

## 1. Overview & Creative North Star: The Silent Curator

This design system is built upon the philosophy of **The Silent Curator**. It rejects the noisy, hyper-interfaced nature of modern SaaS in favor of a cinematic, editorial experience. The goal is to create a digital environment that feels like an architectural walkthrough—where space, light (tonality), and structure (typography) do the heavy lifting.

To break the "template" look, we employ **Intentional Asymmetry**. Large-scale serif display type should often be offset from the main body grid, creating a sense of rhythmic tension. We avoid centered layouts unless they are used for high-impact "Signature Moments." The interface should feel "composed" rather than "assembled."

---

### 2. Colors & Tonal Logic

The palette is rooted in obsidian depths and parchment highlights. It is essential to avoid pure `#000000` or `#FFFFFF`.

**Core Palette Tokens:**

- **Background:** `#0E0F11` (The foundational canvas)
- **Surface 1:** `#14161A` (Primary container level)
- **Surface 2:** `#1B1E24` (Elevated components/navigation)
- **Main Accent:** `#7C8A9A` (Muted slate blue for primary actions)
- **Warm Support:** `#A3937E` (Used sparingly for humanizing elements or secondary highlights)

**The "No-Line" Rule:**
Standard 1px solid borders are prohibited for sectioning. Boundaries must be defined through background color shifts. For example, a `surface-container-low` section should sit against the `background` to create a natural edge.

**The "Glass & Gradient" Rule:**
To provide visual "soul," use subtle linear gradients on main CTAs, transitioning from `primary` (`#7C8A9A`) to `deep-accent` (`#5E6977`) at a 145-degree angle. For floating overlays, utilize **Glassmorphism**: apply `surface-2` at 80% opacity with a `24px` backdrop blur.

---

### 3. Typography: The Editorial Voice

The system relies on the interplay between a sharp, historical serif and a functional, mid-century sans-serif.

- **Display & Headline (PP Editorial New):** Used for "Signature Moments" and storytelling. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create an authoritative, editorial feel.
- **Body & Utility (Neue Haas Grotesk):** Used for all functional data. It is the "architectural" element—clean, reliable, and secondary to the display type.
- **Case Logic:** Sentence case is the default for all headings and body text to maintain a calm, conversational tone. All-caps is reserved strictly for `label-sm` (e.g., small metadata or category tags) with a +5% letter-spacing.

---

### 4. Elevation & Depth

In this system, depth is a product of light and layering, not artificial shadows.

- **The Layering Principle:** Stacking determines hierarchy. Use the `surface-container` tiers (Lowest to Highest) to create "nested" depth. An inner module should always be one tier higher than its parent container to feel "placed" rather than "pasted."
- **Ambient Shadows:** Floating elements (modals, dropdowns) use an extra-diffused shadow: `0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow color must never be grey; it should be a deep, transparent version of the `background` color.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use a "Ghost Border"—the `outline-variant` token at 15% opacity. High-contrast, 100% opaque borders are strictly forbidden as they break the cinematic flow.

---

### 5. Components

#### Buttons

- **Primary:** Gradient fill (`Main Accent` to `Deep Accent`). No border. `md` (10px) radius.
- **Secondary:** Surface 2 background with a Ghost Border. Text in `Primary Text`.
- **Tertiary:** Text only in `Secondary Text`. On hover, transition to `Primary Text` with a subtle 2px underline offset.

#### Input Fields

- **Styling:** Understated. Use `Surface 1` as the fill. Instead of a 4-sided border, use a 1px solid `Border` token (`#20242B`) only on the bottom edge to mimic architectural drafting lines.
- **Focus State:** Transition the bottom border to `Main Accent`.

#### Cards & Lists

- **Rule:** Forbid the use of divider lines between list items.
- **Execution:** Use vertical white space (`spacing-6` or `2rem`) to separate content groups. For cards, use a subtle background shift (`Surface 1` on `Background`) rather than a stroke.

#### Chips

- **Action Chips:** `sm` (6px) radius. `Surface 2` background. All-caps `label-sm` typography.

---

### 6. Do’s and Don’ts

**Do:**

- **Embrace Negative Space:** Use the `spacing-16` (5.5rem) and `spacing-20` (7rem) tokens to let high-end typography breathe.
- **Use Subtle Transitions:** All hover states should have a minimum `300ms` ease-in-out duration to maintain the "calm" personality.
- **Align to a Baseline:** Ensure all Neue Haas Grotesk body text sits on a strict 4px baseline grid to maintain architectural rigor.

**Don’t:**

- **Don't Use Pure White:** It breaks the "mysterious" and "refined" atmosphere. Always default to `Primary Text` (`#F3F0EA`).
- **Don't Use Heavy Shadows:** If a component needs to stand out, use color contrast or a background shift before reaching for a shadow.
- **Don't Use Center-Alignment for Long Form:** Keep the "Editorial" feel by left-aligning text blocks, using wide margins to create a bespoke, non-web look.

---

### 7. Director's Note

The success of this system depends on **restraint**. Every element must feel intentional. If a decorative element doesn't serve the hierarchy or the "Architectural" metaphor, remove it. We are building a gallery, not a billboard.```
````
