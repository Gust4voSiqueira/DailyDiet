module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@theme': './src/theme/index.ts',
            '@components': './src/components/index.ts',
            '@screens': './src/screens/index.ts',
          },
        },
      ],
    ],
  }
}
