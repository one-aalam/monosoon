# MonoSoon UI library

This is the UI library/design system for all your `app`s. If there's a  component you'd want to use across all your applications, this is where you'll put them. Even as a part of a mono-repo, this package is ground-up setup for isolated UI component development with their respective stories, tests, etc.

## Compilation
To make the core library code work across all browsers, and compile the raw TypeScript and React code to plain JavaScript this package leverages `tsup`, a `esbuild` based module that greatly improves performance.

For `ui`, the `build` command runs `tsup`

```bash
tsup src/index.tsx --format esm,cjs --dts --external react
```

which compiles `src/index.tsx`, and exports all of the components in the `ui`, into both ES Modules and CommonJS formats as well as their TypeScript types. The `package.json` for `ui` then instructs the consumer to select the correct format:

```json:ui/package.json
{
  "name": "ui",
  "version": "0.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "sideEffects": false,
}
```

Run `yarn build` to confirm compilation is working correctly. You should see a folder `./dist` which contains the compiled output.

```bash
ui
└── dist
    ├── index.d.ts  <-- Types
    ├── index.js    <-- CommonJS version
    └── index.mjs   <-- ES Modules version
```

## Components

Each file inside of `./src` is a component inside our design system. For example:

```tsx:./src/Button.tsx
import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button>{props.children}</button>;
}

Button.displayName = 'Button';
```

When adding a new file, ensure the component is also exported from the entry `index.tsx` file:

```tsx:./src/index.tsx
import * as React from "react";
export { Button, type ButtonProps } from "./Button";
// Add new component exports here
```

## Storybook

Storybook provides us with an interactive UI playground for our components. This allows us to preview our components in the browser and instantly see changes when developing locally. This example preconfigures Storybook to:

- Use Webpack 5 to bundle stories instantly
- Automatically find any stories inside the component folders
- Write MDX for component documentation pages

For example, here's the included Story for our `Button` component:

```md:./src/Button/Button.stories.mdx
import { Button } from './Button';
import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';

<Meta title="Button" component={Button} />

# Button

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, euismod aliquam nisl nunc euismod.

## Props

<Props of={Box} />

## Examples

Let's define a story for our `Button` component:

<Preview>
  <Story name="Default">
    <Button>Hello</Button>
  </Story>
</Preview>
```

This package includes a helpful Storybook scripts:

- `yarn storybook`: Starts a local server to view the generated Storybook UI
