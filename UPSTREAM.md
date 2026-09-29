# Upstream review

Based on [grunt-cli@1.5.0](https://www.npmjs.com/package/grunt-cli/v/1.5.0), commit [`8c791efc931fa8cf80cc98d09d3e20c36501fc0f`](https://github.com/gruntjs/grunt-cli/commit/8c791efc931fa8cf80cc98d09d3e20c36501fc0f). All published upstream runtime files match this commit byte-for-byte; npm tarball integrity was independently checked.

The fork preserves runtime files, exports, CLI names and engine declarations. Original license and authorship notices remain. Development tooling runs on Node24 without raising the package runtime requirement.

## Issue triage (2026-09-29)

- [#132: Forwarding Node module flags](https://github.com/gruntjs/grunt-cli/issues/132): Preserve CLI dispatch semantics and Node engine >=10. CLI task arguments and options are tested; no unsupported forwarding behavior is added.
- [#138: Global prefix ENOENT](https://github.com/gruntjs/grunt-cli/issues/138): Exercise a local Grunt installation and explicit Gruntfile. Machine-specific global-prefix configuration is not silently changed.

No upstream maintainers were contacted. These are scoped compatibility decisions, not blanket claims that upstream issues are fixed.

## Verification

`npm ci --ignore-scripts`, `npm test`, `npm run test:package`, and `npm audit --audit-level=low`. CI and CodeQL gate the exact immutable package artifact. Packed consumer tests install the resulting archive before exercising its public behavior.
