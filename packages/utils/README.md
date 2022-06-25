# MonoSoon Utils library

This is the Utils library for all your `app`s. If there's a utility you'd want to use across all your applications, this is where you'll put them. Even as a part of a mono-repo, this package is ground-up setup for isolated utility development with their respective tests.

## Compilation
To make the core library code work across all browsers, and compile the raw TypeScript and React code to plain JavaScript this package leverages `tsup`, a `esbuild` based module that greatly improves performance.

For `ui`, the `build` command runs `tsup`

```bash
tsup src/index.tsx --format esm,cjs --dts --external react
```

which compiles `src/index.tsx`, and exports all of the components in the `ui`, into both ES Modules and CommonJS formats as well as their TypeScript types. The `package.json` for `ui` then instructs the consumer to select the correct format:

```json:utils/package.json
{
  "name": "utils",
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

## Available Utilities

## `useApi`
A very light-weight API call wrapper

```tsx
const {
        exec: fetchUsers,
        data: users,
        error,
        status,
        isIdle,
        isPending,
        isSuccess,
        isError,
 } = useApi(() => api.get(`/api/people`).then(resp => resp.data))

  useEffect(() => {
        fetchUsers()
 }, [] )
```

where `api` is a Axios instance
