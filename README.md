# Free Downloads Site (Vite + TypeScript)

A minimal static site with two buttons: "Free Perm" and "Free FN". Clicking a button downloads a corresponding file from `public/downloads/`.

## Project Structure

- `index.html` — App shell, loads `src/main.ts`
- `src/main.ts` — Renders UI and handles download clicks
- `src/style.css` — Basic styling
- `public/downloads/` — Put your downloadable files here
- `netlify.toml` — Netlify build configuration

## Add Your Files

Place your files in `public/downloads/` and name them to match the defaults in `src/main.ts`:

- `free-perm.zip`
- `free-fn.zip`

Or change the file names inside `src/main.ts` to match your actual files.

## Development

```
npm install
npm run dev
```

Then open the local URL printed by Vite. Clicking the buttons will attempt to download from `/downloads/<file>`.

## Build

```
npm run build
```

Outputs to `dist/`.

## Deploy to Netlify

1. Push this folder to a GitHub repository.
2. In Netlify, create a new site from Git, select your repo.
3. Build command: `npm run build`
4. Publish directory: `dist`

Alternatively, use the Netlify CLI.
