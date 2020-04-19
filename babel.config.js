const MODULE_RESOLVER = [
  'module-resolver',
  {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '@assets': './src/assets',
      '@components': './src/components',
      '@screens': './src/screens',
      '@routes': './src/routes',
      '@services': './src/services',
      '@lib': './src/lib',
    },
  },
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [MODULE_RESOLVER],
};
