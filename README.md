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

## Third-party assets

- **3D head model (sample viewer).** "Infinite, 3D Head Scan" by Lee Perry-Smith
  ([Triple Gangers](https://www.triplegangers.com)), licensed under
  [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Obtained from the
  three.js examples (`examples/models/gltf/LeePerrySmith`). Files:
  `public/models/head.glb`, `public/models/head-color.jpg`. Original notice in
  `public/models/LeePerrySmith_License.txt`. The viewer is labelled as a sample
  model, not MAT Labs sensor output.
- three.js, @react-three/fiber and @react-three/drei are MIT licensed.
