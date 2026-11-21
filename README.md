# MAT Labs

Marketing site for MAT Labs Inc. (mat.co). A static Next.js app, ready to import on Vercel with no extra configuration.

## Develop

```bash
npm install
npm run dev
```

- `npm run build` — production build
- `npm run lint` — ESLint

## Type

The brand face is Helvetica Now (Monotype). The license is not in this repository, and no Helvetica Now files are committed.

Inter Tight is loaded with `next/font` as the stand-in. The CSS token is `--font-brand`:

```css
--font-brand: var(--font-brand-file), "Helvetica Now Display", "Helvetica Now Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

`--font-brand-file` is the face actually loaded. To switch:

1. Place the licensed `.woff2` files in `fonts/helvetica-now/`. That directory is gitignored.
2. In `lib/fonts.ts`, remove the `Inter_Tight` export and uncomment the `next/font/local` block.
3. Match the filenames in that block, or edit the paths. Keep `variable: "--font-brand-file"`.

No other file needs to change. Headlines use weight 500. Specs use IBM Plex Mono via `--font-mono`.

## Contact

Demo requests open a mailto draft to `hello@mat.co`. That address is a placeholder. Change `contactEmail` in `lib/site.ts` when the inbox is decided. The form does not post to a server.

## Mark

`public/brand/mark.svg` is the MAT bowtie mark (vector, built from the original logo geometry). `public/brand/app-icon.png` is the icon used for the favicon, Apple touch icon, and Organization logo.

## Media

The hero is the only video (`public/media/hero-video-1080p.mp4`). Other sections use stills. `components/still.tsx` and `components/parallax-still.tsx` accept an optional `videoSrc` when a later loop exists. Leave it unset until the file is in the repo. Do not render an empty player.

## Markets carousel

`components/markets-carousel.tsx` is the tabbed carousel (Ore Mining, Commerce, Automotive, Robotics). It autoplays every 6 s, pauses on hover/focus and when offscreen, and does not autoplay with `prefers-reduced-motion`. Images live in `public/media/markets/` (downloaded, resized, WebP).

### Image credits

| Tab | File | Source | Author | License |
| --- | --- | --- | --- | --- |
| Ore Mining | `ore-mining.webp` (cropped) | https://commons.wikimedia.org/wiki/File:Mina_de_Chuquicamata,_Calama,_Chile,_2016-02-01,_DD_114.JPG | Diego Delso | CC BY-SA 4.0 (attribution required) |
| Commerce | `commerce.webp` | https://www.pexels.com/photo/couple-buying-groceries-at-a-supermarket-4199490/ | Jack Sparrow | Pexels License (free commercial use) |
| Automotive | `automotive.webp` | Still frame from MAT Labs hero video (`hero-video-1080p.mp4`, about 10.5 s) | MAT Labs | Own material |
| Robotics | `robotics.webp` (cropped) | https://commons.wikimedia.org/wiki/File:Quadcopter_camera_drone_in_flight.jpg | Josh Sorenson | CC0 |
