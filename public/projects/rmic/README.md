# RMIC Project Images

Store final image assets for the RMIC Taoyuan Road Management Information
Center case study in this folder.

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

- `goals-01.webp`: Design Goals preview
- `overview-01.webp`: Project Overview platform overview
- `overview-02.webp`: Project Overview map system
- `feature-01.webp`: Feature Extension module view
- `feature-02.webp`: Feature Extension case list
- `feature-03.webp`: Feature Extension map system
- `wireframe-01.webp`: Wireframe & Prototype wireframe board
- `wireframe-02.webp`: Wireframe & Prototype prototype validation
- `components-01.webp`: Component Extension board
- `final-01.webp`: Final Design gallery image
- `final-02.webp`: Final Design gallery image
- `final-03.webp`: Final Design gallery image
- `final-04.webp`: Final Design gallery image

Image paths are managed in the project data files under `src/data/projects/`.
Missing image files intentionally fall back to JSX mockups.
