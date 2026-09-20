# Design System Specification

## Visual direction

A structured editorial portfolio for a frontend engineer working with complex, institutional systems. The visual language should feel precise, calm, and personable, with navy structure, yellow emphasis, and a light canvas.

## Color tokens

- `--color-navy`: `#003060`
- `--color-yellow`: `#FCD116`
- `--color-canvas`: `#F8FAFD` (canvas and light text; never use `#FFFFFF`)
- `--color-surface`: `#F2F6FA` (supporting surface)

Use semantic token names in components and styles. Confirm all text and controls meet WCAG AA contrast.

## Typography tokens

- Primary font: Inter.
- Technical label font: IBM Plex Mono, used occasionally.
- Approved text sizes: 16, 18, 24, 32, 48, and 80px.
- Body and control text must be at least 16px.
- Do not introduce additional type sizes without approval.

## Spacing tokens

4, 8, 12, 16, 24, 32, 48, 64, and 96px.

## Shape and controls

- Buttons: minimum 48px high and 8px radius.
- Cards: 12px radius.
- Focus states must be visible and not rely on color alone.
- Interactive targets must remain usable with keyboard navigation.

## Layout

- Desktop reference viewport: 1440px.
- Desktop grid: 12 columns.
- Outer margins: 80px.
- Gutters: 24px.
- Use flexible layout and reusable components.
- The compact floating navigation remains visible.
- Mobile layout is not approved; document and propose it separately before implementation.

## Motion

Motion must communicate state or emphasis, not obstruct reading. The Contact section has one approved motion behavior: pulse a yellow outline twice around contact links on first entry, then stop. Honor reduced-motion preferences with a static highlight and immediate scrolling.

## Imagery

Do not invent portraits, project screenshots, logos, or other assets. Use explicitly labeled visual placeholders until assets are supplied. The generated homepage concept image is visual guidance only.
