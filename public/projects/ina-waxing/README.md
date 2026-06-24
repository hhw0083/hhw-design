# INA Waxing Project Images

Store final image assets for the INA Waxing brand website case study in this
folder.

Global image filenames:

- `cover.webp` or `cover.png`: portfolio project listing cover
- `hero.webp` or `hero.png`: project detail hero background
- `hero-mobile.webp` or `hero-mobile.png`: optional mobile hero image
- `hero-visual.webp` or `hero-visual.png`: optional desktop right-side mockup

Section image naming rule:

- Use the section name as the filename prefix.
- Add a two-digit suffix for multiple images in the same section.
- Either `.webp` or `.png` is supported with the same basename.

Reserved section filenames:

- `direction-01.webp`: UI Direction website structure
- `direction-02.webp`: UI Direction service pages
- `direction-03.webp`: UI Direction booking path
- `visual-01.webp`: Visual Extension board
- `final-01.webp`: Final Design homepage
- `final-02.webp`: Final Design service detail
- `final-03.webp`: Final Design mobile booking or responsive view

Image paths are managed in the project data files under `src/data/projects/`.
Missing image files intentionally fall back to JSX mockups.
