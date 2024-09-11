const MODULE_RESOLVER = [
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.ios.js', '.android.js'],
    alias: {
      '@components': './src/components',
      '@const': './src/const',
      '@HOCs': './src/HOCs',
      '@hooks': './src/hooks',
      '@layout': './src/layout',
      '@localization': './src/localization',
      '@middleware': './src/middleware',
      '@service': './src/service',
      '@store': './src/store',
      '@styles': './src/styles',
      '@utils': './src/utils',
      '@assets': './src/assets',
    },
  },
];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['ignite-ignore-reactotron', MODULE_RESOLVER],
      },
    },
    plugins: [MODULE_RESOLVER],
  };
};
