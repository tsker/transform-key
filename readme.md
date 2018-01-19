# transform-key

Converting object key is another key

### example
```javascript
let transformKey = require('transform-key')
let data = { old: 'string in old' }

transformKey({ old:'new' }, data)
// { new:'string in old' }

transformKey({ old:'new' }, data, true)
// { old:'string in old', new:'string in old' }
```


