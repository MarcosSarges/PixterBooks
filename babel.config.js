const MODULE_RESOLVER = [
  'module-resolver',
  {
    root: ['./src'],
    alias: {
      '@Components': './src/Components',
      '@Navigation': './src/Navigation',
      '@Constants': './src/Constants',
      '@Features': './src/Features',
      '@Services': './src/Services',
      '@Fixtures': './src/Fixtures',
      '@Themes': './src/Themes',
      '@Config': './src/Config',
      '@Sagas': './src/Sagas',
      '@Redux': './src/Redux',
      '@Types': './src/Types',
      '@I18n': './src/I18n',
      '@Lib': './src/Lib',
    },
  },
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [MODULE_RESOLVER],
};
