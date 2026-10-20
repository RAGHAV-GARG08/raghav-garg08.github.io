# Raghav Garg — Portfolio

One-page personal site for Raghav Garg, Flutter developer and mobile application engineer.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content

Update copy, links, experience, and projects in `src/data/site.ts`. Put a GitHub URL in `site.github` to show it in the social links. Replace `public/Raghav_Garg_Resume.pdf` when the resume changes.

## Deploy

The production output is static files in `dist/`.

- **Vercel:** Import the repo and use the default Vite preset (`npm run build`, output `dist`).
- **Netlify:** Same build command and publish directory `dist`.
