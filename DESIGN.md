# Mitudom Kindergarten — Design system

## Status
This file is the source of truth for the approved website palette. The colors below were supplied by the school on 14 September 2026. Do not introduce new brand colors. The photography and logo remain placeholders until school assets are provided.

## Visual direction
An inviting school visit in clear daylight: calm, observant, and centered on real children. Use an editorial story rhythm, large photography, unhurried whitespace, and direct typography. Avoid repeated card grids, badges, decorative gradients, and competing illustration.

## Approved brand palette
| Role | Name | Value | Use |
| --- | --- | --- | --- |
| Primary Brand | Deep Navy | `#1F3B6D` | Main headings, primary CTA, links, dark brand surfaces |
| Primary Light | Sky Blue | `#D6ECFF` | Selected section and photography-placeholder surfaces |
| Primary Neutral | Warm Cream | `#FFF9EE` | Calm section backgrounds |
| Base | White | `#FFFFFF` | Main page surface and button text on navy |
| Accent | Pastel Pink | `#FFD6E7` | Limited small supporting accents |
| Accent | Mint | `#D8F3E1` | Limited small supporting accents |
| Accent | Sunshine Yellow | `#FFE68A` | Limited small supporting accents |
| Text | Charcoal | `#4B5563` | Body and supporting text |
| Text | Soft Gray | `#9CA3AF` | Subtle rules and nonessential decorative detail only; not body copy |

All UI color values must originate from centralized CSS tokens in `app/globals.css`. State treatments may use transparency derived from these tokens, but must not introduce another brand hue. Primary CTA buttons use Deep Navy with White text. Main headings use Deep Navy, except headings on Deep Navy surfaces, which use White. Page backgrounds are mainly White and Warm Cream, with one selected Sky Blue section. Pink, Mint, and Yellow together should occupy no more than roughly 10–15% of visible area; they need not all be used. Avoid gradients.

## Typography
Thai-first system font stack for reliable glyph rendering and minimal loading cost. Large headings use strong but calm weight, balanced wrapping, and generous line height. English is limited to the school name, approved promise, framework words, and occasional small labels.

## Layout and components
- Mobile-first; content width approximately 1200px and readable prose width approximately 70 characters.
- Full-width visual slots alternate with text-and-image, typography-led, and occasional concise grouped content.
- Square or gently rounded photo edges; small radii on controls. Avoid ornamental card shells.
- Buttons have clear states and sufficient tap area; the primary visit CTA stays prominent.
- Header, photo slot, CTA, and footer are reusable where they truly repeat.

## Tokens
Define color, font, radius, spacing, shadow, and transition duration in one CSS layer. Do not put arbitrary color literals in components or section rules. Use subtle motion and disable nonessential transitions for reduced-motion users.

## Photography
Use labeled local placeholder slots only, with a descriptive replacement brief and aspect ratio. No remote stock imagery. Final photography should be candid, consent-cleared school images showing learning, care, environment, readiness, family partnership, history, and arrival.

## Review criteria
Check hierarchy, typography, whitespace, CTA visibility, layout variation, mobile composition, contrast, and that visual decoration never competes with future photographs.
