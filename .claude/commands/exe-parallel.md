# Parallel Task Execution

## Variables

PLAN_TO_EXECUTE: $ARGUMENTS
NUMBER_OF_PARALLEL_WORKTREES: $ARGUMENTS

## Pre-flight

RUN `ls -la trees/`
RUN `git worktree list`

READ: PLAN_TO_EXECUTE

## Instructions

Create NUMBER_OF_PARALLEL_WORKTREES subagents using the Task tool to build N versions of the same feature in parallel.

This enables us to concurrently build the same feature so we can test and validate each subagent's changes in isolation then pick the best implementation.

Agent assignments:
- First agent runs in `trees/<feature_name>-1/`
- Second agent runs in `trees/<feature_name>-2/`
- Last agent runs in `trees/<feature_name>-N/`

The code in each worktree is identical to the current branch, setup and ready for end-to-end implementation.

Each agent will independently implement the plan detailed in PLAN_TO_EXECUTE in their respective workspace.

When complete, each subagent reports their changes in a comprehensive `RESULTS.md` file at the root of their workspace.

**Important:** Agents must NOT run start scripts, dev servers, or any long-running processes - focus on code changes only.
