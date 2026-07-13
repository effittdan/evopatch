# Evologics Product Landing Page Design Guide

This guide captures the visual and interaction system used by the A-MATRX microsite so future Evologics product landing pages can share the same quality bar without becoming identical copies.

## Design Intent

Evologics product pages should feel clinical, refined, modern, and commercially useful. The experience should help a surgical or wound-care audience understand what the product is, how it fits into familiar workflows, and why it is distinct.

The design language is warm clinical minimalism: precise enough for healthcare, soft enough to avoid feeling sterile, and premium enough to support sales conversations.

## Core Principles

- Lead with the product, not marketing filler.
- Use real product imagery, packaging, matrix textures, and clinical-context visuals wherever possible.
- Keep language direct and compliant. Avoid overclaiming outcomes, mechanisms, or regulatory status.
- Make sections scannable: eyebrow, strong headline, short body, then proof points or product visuals.
- Use cards for repeated items only. Do not nest cards inside cards.
- Preserve generous whitespace, quiet borders, and restrained shadows.
- Prefer calm motion and subtle texture over decorative gradients or busy illustrations.

## Color System

Use OKLCH tokens when possible. They keep contrast and perceived brightness more predictable than hex-only palettes.

```css
:root {
  --background: oklch(0.985 0.008 95);
  --foreground: oklch(0.22 0.02 150);
  --card: oklch(0.995 0.004 95);
  --primary: oklch(0.36 0.075 148);
  --primary-foreground: oklch(0.985 0.008 95);
  --primary-soft: oklch(0.94 0.025 148);
  --accent: oklch(0.66 0.09 65);
  --accent-soft: oklch(0.93 0.03 75);
  --muted-foreground: oklch(0.48 0.015 130);
  --canvas: oklch(0.975 0.012 95);
  --hairline: oklch(0.88 0.014 130);
}
```

Color roles:

- `background`: warm off-white page base.
- `canvas`: slightly deeper section band for trust strips, compliance, and workflow sections.
- `primary`: Evologics evergreen for CTAs, icons, proof marks, and emphasis.
- `primary-soft`: light green tint for quiet highlights.
- `accent`: restrained bronze for small alerts, required markers, and contrast notes.
- `hairline`: low-contrast borders.

Avoid:

- Dominant blue/slate dashboards.
- Purple gradients.
- Beige-only palettes.
- Medical neon green.
- Heavy black sections unless the product brand specifically requires it.

## Typography

Primary typeface: `Manrope`.

Fallback stack:

```css
--font-sans: "Manrope", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
--font-display: "Manrope", ui-sans-serif, system-ui, sans-serif;
```

Type rules:

- Use one family across display and body for a unified product system.
- Headings should be bold, tight, and confident.
- Body text should stay readable: `text-[15px]` to `text-base`, relaxed line height.
- Eyebrows use uppercase, small size, and wide tracking.
- Do not use negative letter spacing globally beyond heading treatment already present in CSS.

Recommended scale:

- Hero H1: `text-4xl sm:text-5xl lg:text-6xl`, `font-extrabold`, `leading-[1.05]`.
- Section H2: `text-3xl sm:text-4xl lg:text-[2.75rem]`, `font-bold`, `leading-tight`.
- Card title: `text-lg` to `text-xl`, `font-semibold`.
- Body: `text-[15px] sm:text-base`, `leading-relaxed`.
- Eyebrow: `0.72rem`, `font-semibold`, `tracking-[0.18em]`, uppercase.

## Spacing and Layout

Use a restrained, repeatable landing-page rhythm:

- Outer page max width: `max-w-7xl`.
- Horizontal padding: `px-5 sm:px-8`.
- Major section padding: `py-20 sm:py-28`.
- Hero top offset: `pt-24 sm:pt-28`.
- Grid gap: `gap-12 lg:gap-16`.
- Cards and panels: `p-5`, `p-6`, or `p-8`.
- Trust strips: compact `py-6`.
- Sticky nav height: `h-16`.

Preferred layout patterns:

- Hero: 12-column grid, 7 columns content and 5 columns product imagery.
- Product proof section: 5/7 split, narrative on left, product visual and numbered list on right.
- Education cards: 2-column mobile, 4-column desktop.
- Contact: 5/7 split, confidence notes left, form right.

## Surfaces

Use subtle surfaces:

```css
--radius: 0.5rem;
```

Common radii:

- Buttons: rounded-full when primary CTA.
- Cards: rounded-xl or rounded-2xl.
- Large image frames: rounded-3xl when the product photography is hero-level.

Borders and shadows:

- Use `border border-hairline` for most surfaces.
- Use shadows sparingly, mainly on hero product frames and high-value CTAs.
- Keep repeated cards quieter than hero imagery.

## Visual Texture

The A-MATRX style uses two background treatments:

- A subtle matrix grid.
- A low-opacity organic texture overlay.

Grid utility:

```css
.matrix-grid {
  background-image:
    linear-gradient(oklch(0.36 0.075 148 / 0.05) 1px, transparent 1px),
    linear-gradient(90deg, oklch(0.36 0.075 148 / 0.05) 1px, transparent 1px);
  background-size: 44px 44px;
}
```

Texture rules:

- Use texture as a full-section environmental layer, not a decorative blob.
- Keep opacity low: roughly `0.28` to `0.35`.
- Use `mix-blend-multiply` only when it improves integration with the warm canvas.
- Do not let texture reduce text contrast.

## Imagery

Product visuals should do real work:

- Use actual product jar, box, flakes, sheet, applicator, or packaging imagery.
- Hero product imagery should be inspectable and well-lit.
- Product images should not be dark, blurred, over-cropped, or purely atmospheric.
- Use product mark/logo in hero as a brand signal above the product name.
- Keep favicon and product mark assets simple and high contrast.

Image frame guidance:

- Hero frame: `aspect-[4/5]`, `rounded-3xl`, `border-hairline`, soft green-tinted shadow.
- Supporting mosaics: 2-column grids, rounded-2xl, thin borders.
- Product box or jar cards: object-cover for environmental shots, object-contain for product pack shots.

## Page Structure

Recommended section order for future product pages:

1. Sticky navigation.
2. Hero with product name, category, core positioning, product image, and CTAs.
3. Trust strip with 3-4 factual attributes.
4. Differentiation section: what this product is and is not.
5. What it is: plain-language product definition.
6. Why format/category matters.
7. Platform or product family relationship.
8. Category education or competitive context.
9. Clinical utility or use-context section.
10. Product attributes.
11. Available configurations.
12. Handling/workflow overview.
13. Storage/logistics.
14. FAQ.
15. Regulatory/use information.
16. Final CTA.
17. Contact form.
18. Footer with compliance language.

Not every product needs every section, but the order should preserve the same narrative arc: identify, differentiate, explain, prove, then convert.

## Components

### Navigation

- Fixed top nav with `bg-background/85` and `backdrop-blur-md`.
- Use Evologics logo at left.
- Desktop nav uses small text links.
- Primary nav CTA is a compact rounded-full button.
- Mobile nav opens as a simple vertical list.

### Section Header

Every major section should use:

- Optional eyebrow.
- Strong H2.
- Optional intro paragraph.
- Max width around `max-w-3xl`.
- Center only for FAQ, platform summaries, or broad closing sections.

### Cards

Cards should be quiet and useful:

- Icon tile at top.
- Short title.
- One brief body paragraph.
- Border and white/warm card surface.
- Slight hover lift only where cards are interactive or comparative.

### CTA Buttons

Primary CTA:

```tsx
className="rounded-full bg-primary px-6 text-primary-foreground hover:opacity-90"
```

Secondary CTA:

```tsx
className="rounded-full border-primary/30 px-6 text-primary hover:bg-primary-soft"
```

Rules:

- Use icon+text for primary actions when helpful.
- Use `ArrowRight` for request, learn, submit, or next-step CTAs.
- Keep button labels action-oriented.

### Forms

Forms should be production-ready, not decorative.

Current lead fields:

- Name: required.
- Email: required.
- Phone.
- Facility.
- Specialty dropdown.
- Message: required.
- Contact consent checkbox.

Use Netlify Forms for static product-page lead capture unless a CRM or backend is explicitly required.

For React/TanStack/SSR deployments on Netlify:

- Include a static form detector at `public/__forms.html`.
- Submit to `/__forms.html`, not `/`.
- Include `form-name`.
- Use honeypot spam protection.
- Add a short PHI warning: "Please do not include patient health information."

Specialty dropdown baseline:

- Wound Care
- Podiatry
- General Surgery
- Plastic & Reconstructive Surgery
- Orthopedic Surgery
- Spine Surgery
- Neurosurgery
- Vascular Surgery
- Cardiothoracic Surgery
- Colorectal Surgery
- Trauma Surgery
- Burn Care
- Dermatology
- Obstetrics & Gynecology
- Urology
- ENT / Otolaryngology
- Oral & Maxillofacial Surgery
- Pain Management
- Sports Medicine
- Family Medicine
- Internal Medicine
- Emergency Medicine
- Long-Term Care
- Other

## Content Style

Voice:

- Precise.
- Clinical.
- Plainspoken.
- Commercially useful.
- Calmly confident.

Use:

- "designed for"
- "supports"
- "intended for"
- "clinician-directed"
- "structural tissue coverage"
- "consistent with the Instructions for Use"

Avoid:

- Outcome guarantees.
- Regenerative claims unless legally approved.
- Overly casual copy.
- Dense technical paragraphs without a scannable structure.
- Claims that imply hemostatic, antimicrobial, pain-relief, or healing acceleration effects unless approved by labeling.

## Compliance Pattern

Include a regulatory section near the end for biologic/tissue products.

Pattern:

- State product category.
- State regulatory framework when appropriate.
- State homologous-use / IFU limitations.
- Include key exclusions, such as not intended as a hemostatic agent.
- Keep the section understated and easy to read.

Footer should repeat the most important regulatory limitation in small text.

## Accessibility

- Maintain strong text contrast.
- Do not place body copy directly over busy product imagery.
- Ensure icon-only controls have accessible labels.
- Keep form labels visible.
- Ensure dropdowns and buttons have stable dimensions.
- Use actual text for compliance and product claims, not raster images.

## Implementation Notes

For Tailwind/CSS builds:

- Keep design tokens in `src/styles.css`.
- Keep product page content and section order in route files or data modules.
- Do not duplicate Lovable/TanStack plugins in `vite.config.ts`.
- For Netlify deploys, pin Nitro to the Netlify preset and publish `dist`.

For future product pages:

- Start by copying the page structure, not the exact copy.
- Replace A-MATRX imagery, mark, product claims, sizes, and regulatory details with product-specific content.
- Preserve the page rhythm, tokens, section patterns, and contact workflow unless the new product has a strong reason to differ.

