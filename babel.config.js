const MODULE_RESOLVER = [
  'module-resolver',
  {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '@assets': './src/assets',
      '@components': './src/components',
      '@screens': './src/screens',
      '@router': './src/router',
      '@services': './src/services',
      '@lib': './src/lib',
      '@ts': './src/ts',
    },
  },
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [MODULE_RESOLVER],
};
