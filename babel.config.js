const MODULE_RESOLVER = [
  'module-resolver',
  {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '@assets': './src/assets',
      '@components': './src/components',
      '@screens': './src/screens',
      '@router': './src/router',
      '@lib': './src/lib',
      '@store': './src/store',
      '@ts': './src/ts',
    },
  },
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [MODULE_RESOLVER],
};
