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
          name: "guesttwo",
          filename: "remoteEntry.js",
          exposes: {
            "./SharedFromTwo": "./src/SharedFromTwo",
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
