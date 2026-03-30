# More Tea Community - Project Instructions

## Workflow

- **Coding**: Claude (this agent) writes all HTML, CSS, and JavaScript for the site.
- **Images**: When a new image is needed, Claude creates a detailed description file inside `Gemini_Photo_Request/`. The user then takes that description to the Gemini website and generates the image by hand. In the future, a Gemini agent may be able to do this automatically.
- **Deployment**: The site is hosted on GitHub Pages at `alimorty.github.io/more_tea_community`. No server or build step is needed - all files are static.

## Folder Structure

- `claude_design/` - design plans and technical specs for Claude and contributors to follow
- `Gemini_Photo_Request/` - image request descriptions for Gemini to generate
- `docs/` - the actual website files (GitHub Pages serves from this folder)
- `agentic_sessions/` - session summaries written by Claude at the end of each conversation

## Session Summaries

At the end of every session, Claude must write a summary file in `agentic_sessions/`.

**Naming convention:** `YYYY-MM-DD_1.md`, `YYYY-MM-DD_2.md`, etc. — increment the number if a file for that date already exists.

**File structure:**
1. **High-level summary** — plain English, what was accomplished, what decisions were made. Written so the user can quickly understand what happened without reading code.
2. **Technical details** — specific files created or modified, CSS classes added, JS functions changed, folder structure changes, etc.

## Rules

- Keep everything simple: plain HTML, CSS, and vanilla JavaScript only.
- No frameworks, no build tools, no npm.
- Every meaningful change should be committed to git.
- When a photo is needed, write a request file in `Gemini_Photo_Request/` before writing any code that depends on it.
