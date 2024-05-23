module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src/'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          alias: {
            '@components': 'components',
            '@const': 'const',
            '@HOCs': 'HOCs',
            '@hooks': 'hooks',
            '@layout': 'layout',
            '@localization': 'localization',
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
