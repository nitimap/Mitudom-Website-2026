# โรงเรียนอนุบาลมิตรอุดม — Mitudom Kindergarten

Next.js and TypeScript homepage for the school's enrollment journey. Read `PRODUCT.md`, `DESIGN.md`, and `CONTENT.md` before changing the experience.

## Local development

```sh
npm install
npm run dev
```

Run `npm run lint`, `npm run typecheck`, and `npm run build` before release. Deploy the repository to Vercel after confirming the real domain, school facts, photography, contact routes, and registration URLs. Search indexing is intentionally disabled in `app/layout.tsx` until those items are ready.

## Content and photography

The homepage photo slots state the intended subject and aspect ratio. Replace them with consent-cleared school images using `next/image` and sensible `sizes` attributes. The visit and Open House calls to action currently lead to a clearly labeled information-pending section. Add working booking and registration destinations when the school provides them. Only the Home page exists; navigation links to its relevant sections.
