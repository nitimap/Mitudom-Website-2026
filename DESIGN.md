# Mitudom Kindergarten — Design system

## Status
Working design direction distilled from the supplied brief. No separate visual design system or brand assets were attached. Replace these inferred tokens with approved brand specifications when provided.

## Visual direction
An inviting school visit in clear daylight: calm, observant, and centered on real children. Use an editorial story rhythm, large photography, unhurried whitespace, and direct typography. Avoid repeated card grids, badges, decorative gradients, and competing illustration.

## Colors
Centralized CSS tokens in `app/globals.css`. Current working palette: clean white, deep ink, coral-red primary, pale blush, and a restrained leaf green. Red is used mainly for action and small emphases. Color values are provisional, not an assertion of existing school brand colors.

## Typography
Thai-first system font stack for reliable glyph rendering and minimal loading cost. Large headings use strong but calm weight, balanced wrapping, and generous line height. English is limited to the school name, approved promise, framework words, and occasional small labels.

## Layout and components
- Mobile-first; content width approximately 1200px and readable prose width approximately 70 characters.
- Full-width visual slots alternate with text-and-image, typography-led, and occasional concise grouped content.
- Square or gently rounded photo edges; small radii on controls. Avoid ornamental card shells.
- Buttons have clear states and sufficient tap area; the primary visit CTA stays prominent.
- Header, photo slot, CTA, and footer are reusable where they truly repeat.

## Tokens
Define color, font, radius, spacing, shadow, and transition duration in one CSS layer. Use subtle motion and disable nonessential transitions for reduced-motion users.

## Photography
Use labeled local placeholder slots only, with a descriptive replacement brief and aspect ratio. No remote stock imagery. Final photography should be candid, consent-cleared school images showing learning, care, environment, readiness, family partnership, history, and arrival.

## Review criteria
Check hierarchy, typography, whitespace, CTA visibility, layout variation, mobile composition, contrast, and that visual decoration never competes with future photographs.
