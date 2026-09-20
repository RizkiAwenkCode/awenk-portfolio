# Decision Log

## 2026-09-20: Specification baseline approved

- Established the portfolio as a credible, personable portfolio for a frontend engineer targeting recruiters and engineering managers in banks, government, and digital-infrastructure institutions.
- Approved Next.js App Router, TypeScript, Tailwind CSS v4, and npm as the planned stack. Official documentation must be verified before setup.
- Approved the supplied brand identity, color tokens, typography, desktop grid, and component shape tokens.
- Approved Indonesian as the default language with an ID/EN toggle. The tagline remains English in both languages.
- Approved the ten-section information architecture and a separate flagship Case Study page.
- Deferred mobile layout approval until a separate proposal is reviewed.
- Deferred implementation, dependency installation, deployment, and publishing.
- Required explicit placeholders for missing facts, assets, metrics, outcomes, and project details.
- Required NDA-safe visual placeholders for project work and no invented portrait.

## Open approvals

- Mobile layout and responsive breakpoints.
- Generated homepage concept image and any supplied personal/project assets.
- Full CV contributions and case-study facts.
- Exact translated copy beyond the approved content.
- Implementation plan for the first section.

## 2026-09-20: Design foundation initialized

- Initialized the approved Next.js App Router, TypeScript, Tailwind CSS v4, and npm stack.
- Added semantic color, spacing, typography, radius, and focus tokens from the approved design system.
- Loaded Inter and IBM Plex Mono through `next/font/google`.
- Added a temporary foundation preview only; portfolio sections remain unimplemented.

## 2026-09-20: Global and Hero implemented

- Implemented the persistent desktop navigation, bilingual ID/EN toggle, skip link, three-column footer, and contact routes.
- Implemented the approved Hero copy, CTAs, expertise labels, and labeled abstract visual placeholder.
- Added reserved placeholders for future section anchors so Global and Hero navigation can be reviewed without implementing later sections.

## 2026-09-20: Remaining sections implemented

- Implemented independently styled Capabilities, Selected Work, Process, Experience, Toolbox, About, and Contact sections.
- Implemented the separate `/case-study` route with the approved narrative order and explicit factual placeholders.
- Kept each section's styling in a colocated CSS module and translated content in the shared content model.
- Added the approved Contact entry animation with reduced-motion fallback.
