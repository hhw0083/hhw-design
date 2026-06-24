# ESG Project Images

Store image assets for the ESG forest matching platform in this folder.

Global image filenames:

- `cover.webp` or `cover.png`: portfolio listing cover
- `hero.webp` or `hero.png`: desktop project detail background hero
- `hero-mobile.webp` or `hero-mobile.png`: optional mobile hero image
- `hero-visual.webp` or `hero-visual.png`: optional desktop right-side mockup

Section image naming rule:

- Use the section name as the filename prefix.
- Add a two-digit suffix for multiple images in the same section.
- Either `.webp` or `.png` is supported with the same basename.

Reserved section filenames:

- `goals-01.webp`: Design Goals preview
- `architecture-01.webp`: Information Architecture overview
- `design-system-01.webp`: Design System board
- `components-01.webp`: UI Components board
- `final-01.webp`: Final Design gallery image
- `final-02.webp`: Final Design gallery image
- `final-03.webp`: Final Design gallery image
- `final-04.webp`: Final Design gallery image
- `final-05.webp`: Final Design gallery image
- `final-06.webp`: Final Design gallery image

Image paths are managed in the project data files under `src/data/projects/`.
Missing image files intentionally fall back to JSX mockups.
