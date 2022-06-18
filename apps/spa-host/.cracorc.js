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
          name: "host",
          filename: "remoteEntry.js",
          remotes: {
            guestone: "guestone@http://localhost:3001/remoteEntry.js",
            guesttwo: "guesttwo@http://localhost:3002/remoteEntry.js",
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
