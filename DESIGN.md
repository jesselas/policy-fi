# Design

## System

policy.fi is a content-led personal academic site for an academic-policy researcher. The visual system should improve hierarchy and page navigation while preserving the current writing, publication structure, and resource-library purpose.

## Theme

The default experience is light, precise, and high-contrast, with a deep technical ink foundation and restrained saturated accents. The surface should feel like a polished research folio, not a company landing page.

## Color

Use OKLCH tokens for new work.

- Background: near-white neutral tinted slightly toward teal, not cream or parchment.
- Ink: near-black blue-green for body and headings.
- Primary: deep teal for navigation, links, and major action states.
- Secondary: mineral green for model/data surfaces.
- Accent: controlled amber or electric cyan for small moments of emphasis.
- Avoid purple-blue gradients, beige academic paper backgrounds, and gray text on colored surfaces.

## Typography

The current site uses Newsreader, Plus Jakarta Sans, and IBM Plex Mono. Those work for the existing production site, but future redesigns should move away from reflex editorial defaults.

For the revised mock direction, use:

- Headings: Literata or a similarly readable scholarly serif.
- Body/UI: Manrope or a similarly clear humanist sans.

Final production should evaluate type licensing and performance before launch.

## Layout

Use a multi-page article-and-index structure. Favor:

- A homepage with the current biographical content and profile image.
- Separate pages for Research, SOUTHMOD, and AI for Economists.
- Dense but calm research lists with strong metadata hierarchy.
- Sticky page-level indexes on long pages.
- Cards only for discrete repeated publications/resources.
- Responsive grids based on `auto-fit` and stable min/max constraints.

## Components

- Sticky top navigation with page links, not single-page section anchors.
- Publication rows/cards with clear title, year, type, venue, authors, abstract preview, and action links.
- Resource modules for SOUTHMOD and AI for Economists.
- Contact/footer area that feels professional rather than social-profile-heavy.

## Motion

Motion should be minimal: mobile nav, hover states, and native disclosure. Avoid hero choreography, scroll reveals, parallax, and anything that makes the site feel like a sales page.

## Accessibility

Body text must meet 4.5:1 contrast. Interactive components need visible focus states and 44px touch targets on mobile. Do not hide core content behind hover-only affordances.
