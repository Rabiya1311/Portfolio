#  Portfolio
 
A responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript — deployed on GitHub Pages.
 
**Live Demo:** [rabiya1311.github.io/Portfolio](https://rabiya1311.github.io/Portfolio/)
 
---
 
## Overview
 
This portfolio presents my skills, training experience, and projects as a front-end developer. It features scroll-triggered animations, a dynamic experience section, mobile-responsive navigation, and a minimal dark design aesthetic.
 
---
 
## Project Structure
 
```
Portfolio/
├── index.html        # Main HTML document
├── style.css         # Custom styles and animations
├── script.js         # DOM logic and interactivity
├── resume.pdf        # Downloadable resume
├── images/           # Profile photo and project assets
└── .vscode/          # Editor configuration
```
 
---
 
## Tech Stack
 
| Technology | Purpose |
|---|---|
| HTML5 | Semantic document structure |
| CSS3 | Custom transitions and animations |
| Tailwind CSS (CDN) | Utility-first styling |
| JavaScript (ES6+) | DOM manipulation and dynamic content |
| Google Fonts | Inter and Space Grotesk typefaces |
| Font Awesome | UI icons |
| GitHub Pages | Hosting and deployment |
 
---
 
## Features
 
- **Fully Responsive** — Mobile-first layout adapting to all screen sizes
- **Smooth Scroll Navigation** — Offset-aware anchor scrolling with navbar clearance
- **Scroll Animations** — Sections fade in on enter via Intersection Observer API
- **Dynamic Experience Timeline** — Tab-based UI rendered from a JavaScript data array
- **Accessible Mobile Menu** — Hamburger toggle with keyboard support (`Esc` to close)
- **Animated Project Cards** — Hover lift effect with CSS transitions
- **Resume Download** — Direct link to downloadable PDF
---
 
## Getting Started
 
No build tools or dependencies required.
 
```bash
git clone https://github.com/Rabiya1311/Portfolio.git
cd Portfolio
open index.html
```
 
Or simply open `index.html` directly in any modern browser.
 
---
 
## Customization
 
### Accent Color
 
The teal accent color is defined as a CSS variable in `style.css`. Changing it updates the entire theme:
 
```css
:root {
    --accent: #64ffda;
}
```
 
### Experience Entries
 
Experience data is stored in a plain JavaScript array in `script.js`. Add, edit, or remove entries as needed:
 
```js
const experiences = [
    {
        title: "Front-End Developer",
        company: "Bano Qabil",
        duration: "2026 — Present",
        points: [
            "Built multiple responsive and interactive web projects",
            "Mastered HTML, CSS, Tailwind CSS, and JavaScript",
        ]
    }
];
```
 
---
 
## Deployment
 
The site is deployed via GitHub Pages from the `main` branch root. Changes pushed to `main` are automatically published.
 
To enable GitHub Pages on a forked copy:
 
> Settings → Pages → Source → Deploy from branch → main / (root)
 
---
 
## License
 
This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
 
---
 
## Author
 
**Rabiya**
 
- GitHub: [github.com/Rabiya1311](https://github.com/Rabiya1311)
- Portfolio: [rabiya1311.github.io/Portfolio](https://rabiya1311.github.io/Portfolio/)
