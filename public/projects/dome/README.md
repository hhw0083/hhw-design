# DOME Project Images

Store final image assets for the DOME original animation concept case study in
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

- `story-01.webp`: Story Concept worldbuilding board
- `story-02.webp`: Story Concept core conflict image
- `story-03.webp`: Story Concept core conflict image
- `visual-01.webp`: Visual Direction atmosphere board
- `character-01.webp`: Character Design exploration
- `character-02.webp`: Character Design detail or expression exploration
- `final-01.webp`: Final Visuals gallery image
- `final-02.webp`: Final Visuals gallery image
- `final-03.webp`: Final Visuals gallery image
- `final-04.webp`: Final Visuals gallery image

Image paths are managed in the project data files under `src/data/projects/`.
Missing image files intentionally fall back to JSX mockups.
