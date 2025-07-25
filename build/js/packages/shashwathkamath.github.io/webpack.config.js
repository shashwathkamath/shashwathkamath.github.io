let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: [require('path').resolve(__dirname, "kotlin/shashwathkamath.github.io.js")]
};
config.output = {
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "shashwathkamath.github.io.js"
            : "shashwathkamath.github.io-[name].js";
    },
    library: "shashwathkamath.github.io",
    libraryTarget: "umd",
    globalObject: "this"
};
    // source maps
    config.module.rules.push({
            test: /\.m?js$/,
            use: ["source-map-loader"],
            enforce: "pre"
    });
    config.devtool = 'eval-source-map';
config.ignoreWarnings = [/Failed to parse source map/]
    
// dev server
config.devServer = {
  "open": true,
  "static": [
    "kotlin",
    "../../../processedResources/js/main"
  ],
  "client": {
    "overlay": {
      "errors": true,
      "warnings": false
    }
  }
};

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
module.exports = config
