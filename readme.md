# object-transform

Converting object key is another key

### example
```javascript
let objectTransfrom = require('objet-transfrom')
let data = { old: 'string in old' }

objectTransform({ old:'new' }, data)
// { new:'string in old' }

objectTransform({ old:'new' }, data, true)
// { old:'string in old', new:'string in old' }
```


