# @ianwremmel/eslint-config-base

[![CircleCI](https://circleci.com/gh/ianwremmel/eslint-config-base.svg?style=svg)](https://circleci.com/gh/ianwremmel/eslint-config-base)
[![Greenkeeper badge](https://badges.greenkeeper.io/ianwremmel/eslint-config-base.svg?token=4190dc68fe0a403cd81bf703058cc27be85ee929cd5ff806f150a9b45de8ab1f&ts=1506393936331)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ianwremmel/eslint-config-base/blob/HEAD/LICENSE)
[![node](https://img.shields.io/node/v/gh-badges.svg)](https://www.npmjs.com/package/@ianwremmel/eslint-config-base)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style)](https://github.com/RichardLitt/standard-readme)

> @ianwremmel's preferred base lint rules

## Install

```bash
npm install --save-dev @ianwremmel/eslint-config-base
(
  export PKG=@ianwremmel/eslint-config-base;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

## Usage

Add `@ianwremmel/eslint-config-base` to your eslint config's `extends` list.

## Maintainers

[Ian Remmel](https://github.com/ianwremmel)

## Contribute

See [CONTRIBUTE](CONTRIBUTE.md)

## License

&copy; [License Type](LICENSE)
