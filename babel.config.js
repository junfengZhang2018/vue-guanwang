//按需引入element-ui
module.exports = {
  presets: ["@vue/app"],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    // element官方教程
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
