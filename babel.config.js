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
        "version": "3.15.0",
        "proposals": true
      }
    }],
    "@babel/preset-react"
  ];

  return {
    presets
  };
};