# Copilot Instructions for AI Coding Agents

## Project Overview
This project is a static website for IOTA TECH, structured for maintainability and content flexibility. It uses markdown for content, Nunjucks (`.njk`) for templating, and a custom data/settings structure. There is no build system or test framework present in the codebase.

## Key Directories & Files
- `src/` — Main content and configuration
  - `*.md` — Top-level pages (about, contact, index, services)
  - `services/` — Markdown files for individual services
  - `_includes/` — Nunjucks templates and reusable components
    - `base.njk` — Main site layout
    - `service-detail.njk` — Service detail template
    - `animated-icons/` — SVG icons for services
  - `_data/settings.json` — Site-wide settings (e.g., company info, navigation)
  - `assets/css/style.css` — Main stylesheet
  - `assets/img/` — Images
  - `admin/` — Netlify CMS configuration (`config.yml`, `index.html`)
- `package.json` — May define scripts or dependencies (not present in this context)

## Content & Templating Patterns
- Content is written in markdown and rendered via Nunjucks templates.
- Service pages are modular: add a new service by creating a markdown file in `src/services/` and referencing it in navigation/data as needed.
- SVG icons are organized by service in `src/_includes/animated-icons/` and referenced in templates.
- Global site settings (title, nav, etc.) are managed in `src/_data/settings.json`.

## Developer Workflows
- **Content updates:** Edit or add markdown files in `src/` or `src/services/`.
- **Template changes:** Edit Nunjucks files in `src/_includes/`.
- **Styling:** Edit `src/assets/css/style.css`.
- **CMS:** Netlify CMS is configured in `src/admin/config.yml` for non-technical content editing.
- **No build/test scripts** are present; site is likely built/deployed by an external static site generator (e.g., Eleventy, not included here).

## Project-Specific Conventions
- Use semantic, lowercase filenames for markdown and templates.
- Keep SVGs simple and optimized for inline use.
- All site structure and navigation is data-driven via `settings.json` and markdown frontmatter.
- Avoid hardcoding navigation or company info in templates; use data files instead.

## Integration Points
- Netlify CMS for content management (`src/admin/`)
- Static site generator (assumed, not present in repo)

## Examples
- To add a new service:
  1. Create `src/services/new-service.md` with frontmatter and content.
  2. Add icon SVG to `src/_includes/animated-icons/` if needed.
  3. Update `src/_data/settings.json` or navigation as required.

---

For questions about build/deploy, check external documentation or deployment platform settings (not in repo).
