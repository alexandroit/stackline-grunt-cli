# @stackline/grunt-cli

> The grunt command line interface.

[![npm version](https://img.shields.io/npm/v/@stackline/grunt-cli.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/grunt-cli)
[![license](https://img.shields.io/npm/l/@stackline/grunt-cli.svg?style=flat-square)](https://github.com/alexandroit/stackline-grunt-cli)
[![GitHub repository](https://img.shields.io/badge/GitHub-alexandroit%2Fstackline-grunt-cli-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-grunt-cli)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/grunt-cli/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/grunt-cli/)** | **[npm](https://www.npmjs.com/package/@stackline/grunt-cli)** | **[Issues](https://github.com/alexandroit/stackline-grunt-cli/issues)** | **[Repository](https://github.com/alexandroit/stackline-grunt-cli)**

**Current package version:** `1.0.1`

---

## Why this package?

`@stackline/grunt-cli` is the Stackline-maintained distribution of `grunt-cli@1.5.0`. It is an independent continuation of [grunt-cli](https://github.com/gruntjs/grunt-cli); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/grunt-cli@1.0.1` |
| API target | `grunt-cli@1.5.0` |
| Supported Node.js | `>=10` |
| License | `MIT` |
| CLI | `grunt` |
| Runtime dependencies | `grunt-known-options, interpret, liftup, nopt, v8flags` |

## Installation

```bash
npm install @stackline/grunt-cli
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install grunt-cli@npm:@stackline/grunt-cli
```

## Usage and API reference

### grunt-cli [![Build Status: Linux](https://travis-ci.org/gruntjs/grunt-cli.svg?branch=master)](https://travis-ci.org/gruntjs/grunt-cli) [![Build Status: Windows](https://ci.appveyor.com/api/projects/status/prp6g944b05jsq6d/branch/master?svg=true)](https://ci.appveyor.com/project/gruntjs/grunt-cli/branch/master)

> The Grunt command line interface.

Install this globally and you'll have access to the `grunt` command anywhere on your system.

```shell
npm install -g @stackline/grunt-cli
```

**Note:** The job of the `grunt` command is to load and run the version of Grunt you have installed locally to your project, irrespective of its version.  Starting with Grunt v0.4, you should never install Grunt itself globally.  For more information about why, [please read this](http://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation).

See the [Getting Started](http://gruntjs.com/getting-started) guide for more information.

## Shell tab auto-completion
To enable tab auto-completion for Grunt, add one of the following lines to your `~/.bashrc` or `~/.zshrc` file.

```bash
# Bash, ~/.bashrc
eval "$(grunt --completion=bash)"
```

```bash
# Zsh, ~/.zshrc
eval "$(grunt --completion=zsh)"
```

## Installing grunt-cli locally
If you prefer the idiomatic Node.js method to get started with a project (`npm install && npm test`) then install grunt-cli locally with `npm install @stackline/grunt-cli --save-dev`. Then add a script to your `package.json` to run the associated grunt command: `"scripts": { "test": "grunt test" } `. Now `npm test` will use the locally installed `./node_modules/.bin/grunt` executable to run your Grunt commands.

To read more about npm scripts, please visit the npm docs: <https://docs.npmjs.com/misc/scripts>.

## Credits and original authors

- Original project: [grunt-cli](https://github.com/gruntjs/grunt-cli).
- Grunt Development Team.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## License

`MIT`. See the license and notice files in the [repository](https://github.com/alexandroit/stackline-grunt-cli).

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
