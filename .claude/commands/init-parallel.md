# Init Parallel Worktrees for Daita Dynamics

Initialize three parallel git worktree directories for concurrent development.

## Variables

FEATURE_NAME: $ARGUMENTS

## Execute these tasks

CREATE new directory `trees/`

> Execute these steps in parallel for concurrency

CREATE first worktree:
- RUN `git worktree add -b FEATURE_NAME-1 ./trees/FEATURE_NAME-1`
- COPY `.env*` to `./trees/FEATURE_NAME-1/` (if exists)
- RUN `cd ./trees/FEATURE_NAME-1 && npm install`
- UPDATE `./trees/FEATURE_NAME-1/package.json` dev script to `next dev -p 3001`

CREATE second worktree:
- RUN `git worktree add -b FEATURE_NAME-2 ./trees/FEATURE_NAME-2`
- COPY `.env*` to `./trees/FEATURE_NAME-2/` (if exists)
- RUN `cd ./trees/FEATURE_NAME-2 && npm install`
- UPDATE `./trees/FEATURE_NAME-2/package.json` dev script to `next dev -p 3002`

CREATE third worktree:
- RUN `git worktree add -b FEATURE_NAME-3 ./trees/FEATURE_NAME-3`
- COPY `.env*` to `./trees/FEATURE_NAME-3/` (if exists)
- RUN `cd ./trees/FEATURE_NAME-3 && npm install`
- UPDATE `./trees/FEATURE_NAME-3/package.json` dev script to `next dev -p 3003`

VERIFY setup by running `git worktree list`
