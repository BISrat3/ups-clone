module.exports = {
  // in tailwind we used content to search for the specific file
  content: ['./**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
