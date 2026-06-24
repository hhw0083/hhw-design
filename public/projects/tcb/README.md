# TCB Project Images

Store final image assets for the TCB virtual machine management platform in
this folder.

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
- `dashboard-01.webp`: Dashboard Design light theme overview
- `dashboard-02.webp`: Dashboard Design dark theme overview
- `dashboard-03.webp`: Dashboard Design announcement view
- `improvements-01.webp`: Key Improvements deployment flow
- `improvements-02.webp`: Key Improvements announcement view
- `improvements-03.webp`: Key Improvements virtual machine list
- `theme-01.webp`: Theme & Design System comparison
- `theme-02.webp`: Theme & Design System foundations
- `components-01.webp`: UI Components showcase
- `final-01.webp`: Final Design gallery image
- `final-02.webp`: Final Design gallery image
- `final-03.webp`: Final Design gallery image
- `final-04.webp`: Final Design gallery image

Image paths are managed in the project data files under `src/data/projects/`.
Missing image files intentionally fall back to JSX mockups.
