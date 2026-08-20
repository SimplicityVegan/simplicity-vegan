# Simplicity Vegan — Website

A 3-page static site for Simplicity Vegan (Langley, BC): **Home**, **Menu**, and **Contact**.
No build step, no frameworks — plain HTML/CSS/JS, ready for GitHub Pages.

## File structure

```
index.html          Home page
menu.html            Full menu (from the Simplicity Vegan PDF menu)
contact.html         Contact page with mailto button
assets/
  styles.css         Shared styles (colors, type, layout)
  script.js          Mobile nav toggle + menu scroll-spy
  img/               Logo + food photos
```

## Publish it with GitHub Pages (free)

1. Create a new repository on GitHub (e.g. `simplicity-vegan-site`) and push these files to the
   root of the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`,
   folder `/ (root)`. Save.
4. GitHub will publish the site at `https://<username>.github.io/<repo-name>/` within a minute
   or two.
5. Optional: to use `simplicityveganbaking.com` instead, add a `CNAME` file at the repo root
   containing just the domain, then point the domain's DNS at GitHub Pages (Settings → Pages
   will show the exact records to add once a custom domain is entered there).

## Editing content later

- **Menu prices/items** — edit the `<div class="menu-item">` blocks in `menu.html`. Each item
  has a name, an optional GF/SOF tag, a price, and an ingredients line.
- **Photos** — swap files in `assets/img/` and update the `src` in the HTML (keep similar
  dimensions for the best crop in the gallery grid).
- **Colors/fonts** — all defined once at the top of `assets/styles.css` under `:root`.
