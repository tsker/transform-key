# transform-key

Converting object key is another key

### example
```javascript
let transformKey = require('transform-key')
let data = { old: 'string in old' }

transformKey(data, { old:'new' })
// { new:'string in old' }

transformKey(data, { old:'new' }, true)
// { old:'string in old', new:'string in old' }

function parseString(oldKey): string | number{
    console.log(oldKey) // old
    return 'new'
}
transformKey(data, { old: parseString }, true)
// { old:'string in old', new:'string in old' }
```


