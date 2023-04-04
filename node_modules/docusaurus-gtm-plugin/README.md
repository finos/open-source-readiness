# docusaurus-gtm-plugin
Adds a Google Tag Manager script and noscript html tag to your docusaurus site.

## Add Plugin
To add the plugin to your docusaurus v2 site, do this:
1. `yarn add docusaurus-gtm-plugin` (alternatively: `npm install --save docusaurus-gtm-plugin`)
2. Add the plugin to your `docusaurus.config.js` like this:
```js
module.exports = {
  plugins: [
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-XXXXXXX', // GTM Container ID
      }
    ]
  ],
  ...
};
```
