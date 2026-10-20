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

The production output is static files in `dist/`. GitHub Pages is configured for this repo.

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist/`.

The live URL is `https://raghav-garg08.github.io/`.

- **Vercel:** Import the repo and use the default Vite preset (`npm run build`, output `dist`). Set the root path if you are not using GitHub Pages.
- **Netlify:** Same build command and publish directory `dist`.
