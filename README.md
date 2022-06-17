# shogun-admin demo extension

To see the button in the admin client the following steps must be performed:

* edit the admin config and add the following:

```
  extraScripts: ['/assets/extra.js'],
  scriptNames: ['admin-extension']
```

* compile this plugin using `npm run build`
* copy the resulting javascript file to `src/main/resources/public/assets/extra.js` in the shogun-boot project/module
