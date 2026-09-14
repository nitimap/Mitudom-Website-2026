# โรงเรียนอนุบาลมิตรอุดม — Mitudom Kindergarten

Next.js and TypeScript homepage for the school's enrollment journey. Read `PRODUCT.md`, `DESIGN.md`, and `CONTENT.md` before changing the experience.

## Local development

```sh
npm install
npm run dev
```

Run `npm run lint`, `npm run typecheck`, and `npm run build` before release. Search indexing is intentionally disabled in `app/layout.tsx` until the site is ready.

## Content and photography

The homepage retains empty photo areas until consent-cleared school images are available. Replace them using `next/image` and sensible `sizes` attributes; the subject briefs remain in the `PhotoSlot` props. The visit and Open House actions call the confirmed school phone number until dedicated URLs are set through `NEXT_PUBLIC_VISIT_BOOKING_URL` and `NEXT_PUBLIC_OPEN_HOUSE_REGISTRATION_URL` in Vercel (see `.env.example`). Only the Home page exists; navigation links to its relevant sections.
