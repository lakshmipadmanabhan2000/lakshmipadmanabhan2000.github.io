# P Lakshmi — Portfolio

A single-page portfolio site built from my resume, ready to host on GitHub Pages.

## Preview locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new GitHub repo (either `lakshmipadmanabhan2000.github.io` for a root profile
   site, or any other name, e.g. `portfolio`).
2. Push this folder:

   ```bash
   cd lakshmi-portfolio
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/lakshmipadmanabhan2000/<repo-name>.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Source → Deploy from branch → `main` / `root`** → Save.
4. Your site goes live at:
   - `https://lakshmipadmanabhan2000.github.io/` (if the repo is named `lakshmipadmanabhan2000.github.io`), or
   - `https://lakshmipadmanabhan2000.github.io/<repo-name>/` otherwise.

## Customize

- Edit content directly in `index.html`.
- Colors/theme tokens live at the top of `styles.css` (`:root` and the dark-mode blocks).
- The theme toggle, mobile nav, and scroll animations are in `script.js`.
