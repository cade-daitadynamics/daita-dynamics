# Generate Project-Specific Init Parallel Command

Create a customized init-parallel.md slash command for this project based on CLAUDE.md.

## Instructions

1. READ the CLAUDE.md file to understand:
   - Project name and type
   - Package manager (npm, bun, pnpm, yarn, uv, pip, etc.)
   - Project structure (monorepo with client/server, single app, Python backend, etc.)
   - Dev server command and how to configure ports
   - Any .env files that need copying (.env, .env.local, .env.development, etc.)

2. CREATE the file `.claude/commands/init-parallel.md` using this EXACT format:

---

# Init Parallel Worktrees for [Project Name]

Initialize three parallel git worktree directories for concurrent development.

## Variables

FEATURE_NAME: $ARGUMENTS

## Execute these tasks

CREATE new directory `trees/`

> Execute these steps in parallel for concurrency

CREATE first worktree:
- RUN `git worktree add -b FEATURE_NAME-1 ./trees/FEATURE_NAME-1`
- COPY `[env files pattern]` to `./trees/FEATURE_NAME-1/` (if exists)
- RUN `cd ./trees/FEATURE_NAME-1 && [install command]`
- UPDATE dev server port to `5174` in [config file or command]

CREATE second worktree:
- RUN `git worktree add -b FEATURE_NAME-2 ./trees/FEATURE_NAME-2`
- COPY `[env files pattern]` to `./trees/FEATURE_NAME-2/` (if exists)
- RUN `cd ./trees/FEATURE_NAME-2 && [install command]`
- UPDATE dev server port to `5175` in [config file or command]

CREATE third worktree:
- RUN `git worktree add -b FEATURE_NAME-3 ./trees/FEATURE_NAME-3`
- COPY `[env files pattern]` to `./trees/FEATURE_NAME-3/` (if exists)
- RUN `cd ./trees/FEATURE_NAME-3 && [install command]`
- UPDATE dev server port to `5176` in [config file or command]

VERIFY setup by running `git worktree list`

---

3. CUSTOMIZE the template based on CLAUDE.md:

   **For project name:**
   - Replace [Project Name] with the actual project name from CLAUDE.md

   **For env files:**
   - Single .env: `.env`
   - Multiple env files: `.env*`
   - Specific files: `.env`, `.env.local`
   - Nested (monorepo): `./server/.env`, `./client/.env`

   **For install command based on package manager:**
   - npm: `npm install`
   - bun: `bun install`
   - pnpm: `pnpm install`
   - yarn: `yarn install`
   - Python (uv): `uv sync`
   - Python (pip): `pip install -r requirements.txt`

   **For monorepo/full-stack projects, add steps for each directory:**
   ```
   - RUN `cd ./trees/FEATURE_NAME-1/server && [backend install]`
   - RUN `cd ./trees/FEATURE_NAME-1/client && [frontend install]`
   ```

   **For port configuration based on framework:**
   - Next.js: UPDATE package.json dev script to `next dev -p PORT`
   - Vite: UPDATE vite.config.ts server.port to PORT
   - Create React App: UPDATE package.json dev script to `PORT=XXXX react-scripts start`
   - Python FastAPI: UPDATE uvicorn command to include `--port PORT`
   - Flask: UPDATE run command to include `port=PORT`

4. FORMAT RULES (critical for slash commands to work):
   - Do NOT use ```bash code blocks
   - Use RUN `command` format with backticks around the command
   - Use FEATURE_NAME as the variable name (Claude will substitute the actual value)
   - Keep the ## Variables section with $ARGUMENTS exactly as shown
   - Use action keywords: RUN, COPY, UPDATE, CREATE, VERIFY

5. SAVE the generated file to `.claude/commands/init-parallel.md`

6. CONFIRM by:
   - Showing the full contents of the created file
   - Explaining any project-specific customizations made
   - Reminding user to run `/project:init-parallel feature-name` to use it
