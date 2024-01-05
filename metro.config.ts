// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer")
};

config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext:any) => ext !== "svg"),
  sourceExts: [...config.resolver.sourceExts, "svg",'jsx', 'js', 'ts', 'tsx', 'cjs','mjs','d.ts',
    'json']
};

module.exports = config;
