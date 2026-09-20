# 01 Global

## Purpose

Provide persistent identity, navigation, language switching, and a clear route to contact.

## Approved content

Brand: Awenk. Navigation in Indonesian: Karya, Keahlian, Pengalaman, Tentang, Hubungi saya. English: Work, Capabilities, Experience, About, Contact me. The contact CTA scrolls to Contact. Footer columns: identity, navigation, contact.

## Layout

Compact floating navigation remains visible. The footer uses three columns on the approved desktop reference grid. Use semantic landmarks for header/navigation/main/footer.

## Interactions

Navigation links scroll to their section. The contact CTA scrolls to Contact. ID/EN is a keyboard-accessible toggle, updates document language, preserves the current section, and swaps translated content without mixing it into component structure.

## Accessibility

Use a labeled navigation landmark, logical heading order, skip link, visible keyboard focus, semantic links, and an explicit language-toggle name/state. Set the document language to `id` by default and `en` when selected. Do not rely on color alone for active states.

## Acceptance criteria

- Floating navigation is visible throughout the page.
- All approved navigation labels are present in both languages.
- Contact CTA reaches Contact without changing page context.
- Language switching preserves the current section and document language.
- Footer has identity, navigation, and contact columns.
- Controls meet minimum 48px height and WCAG AA contrast.

## Unresolved details

- Floating navigation exact position, width, and desktop collision behavior.
- Active-section indicator treatment.
- Mobile navigation and responsive footer layout are not approved.
- Final footer identity and contact formatting.

## Implementation status

Specification approved; implementation not started.
