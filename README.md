# MonoSoon

MonoSoon is a [turborepo](https://turborepo.org/) based monorepo starter kit for React based apps.


## What's inside?

This repo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `spa`: a [CRA](https://create-react-app.dev/) app
- `ui`: a stub React component library shared by `apps/spa` and can be used by other _apps_ you'll add in the future
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd monosoon
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd monosoon
yarn run dev
```

_You usually do development or builds from the root, but if for some reason you want to run commands on individual workspaces, have a look at [filtering](https://turborepo.org/docs/core-concepts/filtering)_

### While developing...
Since you're working with a mono-repo the standard commands you use to add, remove or update packages are needed to be tweaked a bit to allow for package updates as per the individual workspace(`app` or `package`) you're working on actively

#### Install

```sh
yarn workspace <workspace> add <package>
```
Example:
```
yarn workspace spa add axios
```

#### Uninstall

```sh
yarn workspace <workspace> remove <package>
```
Example:
```
yarn workspace spa remove axios
```

#### Update

```sh
yarn workspace <workspace> update <package>
```
Example:
```
yarn workspace spa update axios
```
