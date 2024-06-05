module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['ignite-ignore-reactotron', MODULE_RESOLVER],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src/'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.ios.js', '.android.js'],
          alias: {
            '@components': 'components',
            '@const': 'const',
            '@HOCs': 'HOCs',
            '@hooks': 'hooks',
            '@layout': 'layout',
            '@localization': 'localization',
            '@middleware': 'middleware',
            '@service': 'service',
            '@store': 'store',
            '@styles': 'styles',
            '@utils': 'utils',
          },
        },
      ],
    ],
  };
};
