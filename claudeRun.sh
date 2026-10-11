#!/usr/bin/env bash
# Run Claude Code rooted in the design system package — e.g. to run /design-sync,
# which pushes these components into the company design system in Claude Design.

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

# Optional: Chrome DevTools MCP (ignore if already registered)
claude mcp add chrome-devtools npx chrome-devtools-mcp@latest 2>/dev/null || true

exec claude \
  --dangerously-skip-permissions \
  "$@"
