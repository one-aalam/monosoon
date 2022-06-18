const { ModuleFederationPlugin } = require("webpack").container;

const packageDeps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "guestone",
          filename: "remoteEntry.js",
          exposes: {
            "./SharedFromOne": "./src/SharedFromOne",
          },
          shared: {
            ...packageDeps,
            ui: {
              singleton: true,
            },
            react: {
              singleton: true,
              requiredVersion: packageDeps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: packageDeps["react-dom"],
            },
          },
        }),
      ],
    },
  },
});
