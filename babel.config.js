module.exports = function (api) {
  api.cache(true);

  const presets = [
    ["@babel/preset-env",
    {
      "targets": {
        "browsers": [
          "defaults",
          "not IE <= 11",
          "maintained node versions"
        ]
      },
      "useBuiltIns": "usage",
      "corejs": {
        "version": "3.20.2",
        "proposals": true
      }
    }],
    "@babel/preset-react"
  ];

  const plugins = [
    "@babel/plugin-transform-classes",
    "@babel/plugin-transform-modules-umd"
  ]

  return {
    presets,
    plugins
  };
};