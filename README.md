# Mina Mekhael — Professional Portfolio

A single-page portfolio designed to translate Mina Mekhael’s product setup expertise, Salesforce leadership, and automation storytelling into an immersive digital experience.

## Overview

- Cinematic hero section with key outcomes and focus areas.
- Story, selected work, experience timeline, approach, skills, and contact sections crafted from the latest resume highlights.
- Mobile navigation menu, interactive skill spotlight, and live year stamp handled with lightweight JavaScript.
- Responsive layout with high-contrast design inspired by sunset and glassmorphism motifs.

## Project structure

```
├── index.html      # Page markup and content
├── styles.css      # Visual system and responsive layout
├── script.js       # Navigation toggle, skill spotlight, year helper
└── assets/
    └── README.md   # Guidance for adding custom media (resume, imagery)
```

## Getting started

1. Clone or download this repository.
2. Add personal assets following the notes in `assets/README.md` (resume PDF, hero image, etc.).
3. Open `index.html` directly in a browser or serve locally:

   ```bash
   python -m http.server 8000
   ```

4. Visit [http://localhost:8000](http://localhost:8000) to preview the portfolio.

## Customization checklist

- **Copy:** Update section content in `index.html` to reflect new accomplishments, testimonials, or focus areas.
- **Navigation:** Adjust anchor links and section IDs if you add or remove major sections.
- **Visuals:** Modify CSS custom properties at the top of `styles.css` to tweak colors, typography, and glow effects.
- **Interactions:** Extend `script.js` if you introduce new components that require interactivity (carousels, analytics, etc.).
- **Assets:** Replace placeholder external links (LinkedIn, GitHub, calendar) with your actual profiles.

## Accessibility & testing tips

- Validate color contrast when changing the palette to maintain readability against the dark background.
- Ensure new imagery includes descriptive alt text and that focus states remain visible.
- Test navigation and section spacing on mobile devices—the header is sticky, so confirm anchor targets have adequate scroll offset.

## Launch & maintenance

- Host on a static-friendly platform such as GitHub Pages, Netlify, or Vercel for quick publishing.
- Schedule quarterly content reviews to refresh metrics, add recent wins, and keep links current.
- Maintain version control for asset updates (resume, imagery) so you can roll back if needed.

## License

This project is provided for personal portfolio use.
