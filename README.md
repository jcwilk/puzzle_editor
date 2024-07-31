[![Tests](https://github.com/jcwilk/puzzle_editor/actions/workflows/test.yml/badge.svg)](https://github.com/jcwilk/puzzle_editor/actions?query=workflow%3A%22Run%20Tests%22)

A prototype around editing puzzles.

# Deploy

Just push to master and the github action will build into the `gh-pages` branch.

# Local development

Make sure node is installed and updated, then after cloning and cding into the project:

```
npm install
npm run dev
```

Vite should handle automatically re-serving files as they change.

# After building a repo from the template

Look for instances of "Vite App" and "vite-template" to rename to something more appropriate.

Also as per the note, fix the test build badge at the top of the README to point to the new user/repo.
