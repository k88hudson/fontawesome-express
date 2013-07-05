fontawesome-express

```
npm install fontawesome-express
```

In app.js
```
var fontawesome = require("fontawesome-express");
express.use(fontawesome({
  baseDir: "/",
  cssDir: "/css",
  optimize: true
});
```
