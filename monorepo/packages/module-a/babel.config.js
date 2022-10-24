module.exports = (api) => {
  api.cache(true);
  return {
    sourceType: "unambiguous",
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            ie: "11",
          },
          useBuiltIns: "usage",
          corejs: "3",
        },
      ],
    ],
    plugins: [["@babel/plugin-transform-runtime", { "corejs": 3 }]],
  };
};
