#!/usr/bin/env bash
# Release: npm run release -- <patch|minor|major|X.Y.Z>
#
# Builds dist/, commits it with the version bump, and creates a LIGHTWEIGHT
# vX.Y.Z tag (codespec convention). dist/ is committed on purpose: consumers
# install `github:pamfilico/design-core#vX.Y.Z` and npm then needs no build —
# a `prepare` script would make every consumer download Next + Storybook.
# Add the CHANGELOG.md entry before running this.

set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

BUMP="${1:?usage: npm run release -- <patch|minor|major|X.Y.Z>}"

if [ -n "$(git status --porcelain -- . ':!dist' ':!CHANGELOG.md')" ]; then
  echo "Working tree has uncommitted changes besides CHANGELOG.md — commit them first." >&2
  exit 1
fi

VERSION="$(npm version "$BUMP" --no-git-tag-version | tr -d v)"
grep -q "## v$VERSION" CHANGELOG.md || {
  echo "CHANGELOG.md has no '## v$VERSION' entry — add one, then rerun." >&2
  git checkout -- package.json package-lock.json
  exit 1
}

npm run typecheck
npm run build

git add package.json package-lock.json CHANGELOG.md dist
git commit -m "release: v$VERSION"
git tag "v$VERSION"

echo
echo "Tagged v$VERSION. Publish with:"
echo "  git push origin HEAD && git push origin v$VERSION"
