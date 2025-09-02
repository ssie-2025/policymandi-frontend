# Copilot Instructions for Policymandi Frontend

## Architecture Overview
- This is a React + Vite project, organized by feature and insurance product in `src/Components/`.
- Components are grouped by insurance type (e.g., `Lifeinsurance`, `Healthinsurance`) and feature (e.g., `Banner2`, `Hero`, `SliderSection`).
- Each component typically has its own folder and CSS file for modular styling.
- Static assets (images, icons, videos) are stored in `src/assets/` and imported directly into components.

## Developer Workflows
- **Install dependencies:**
  - Run `npm install` in `policymandi_frontend/`.
- **Start development server:**
  - Run `npm run dev` (uses Vite for fast refresh and HMR).
- **Debugging:**
  - Use VS Code's debugger for Node.js and Vite (see launch configs if present).
- **Adding new components:**
  - Place new components in the relevant insurance type folder under `src/Components/`.
  - Pair each component with a CSS file for styles.
  - Import assets from `src/assets/` as needed.

## Project-Specific Patterns
- **Carousels/Sliders:**
  - Use `react-slick` or `swiper` for carousels. Import their CSS in the component.
  - Slides can be images or React components; use conditional rendering in `.map()` to handle mixed content types.
- **Forms:**
  - Contact forms (e.g., `GetTouch.jsx`) use [Web3Forms](https://web3forms.com/) for submission. Ensure all fields have `name` and `required` attributes.
  - Form data is sent via `fetch` to the Web3Forms API with an `access_key`.
- **Styling:**
  - Responsive design is handled via media queries in CSS files.
  - Use modern CSS effects (hover, transitions, gradients) for visual polish.

## Integration Points
- **Web3Forms:**
  - Used for contact form submissions. Check the dashboard and email settings if submissions are not received as expected.
- **Third-party Libraries:**
  - `react-slick` and `swiper` for carousels/sliders.
  - Import their CSS in the relevant component files.

## Key Files & Directories
- `src/Components/` — Main React components, grouped by feature and insurance type.
- `src/assets/` — Images and static assets.
- `src/Components/GetTouch/GetTouch.jsx` — Example of external API integration (Web3Forms).
- `src/Components/Hero/Hero.jsx` — Example of Swiper slider with mixed content.
- `src/Components/SliderSection/SliderSection.jsx` — Example of react-slick carousel.

---

**Feedback:**
If any section is unclear or missing details, please specify which workflows, patterns, or integrations need further explanation.
