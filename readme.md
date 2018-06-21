# transform-key

Converting object key to another key

### install
```javascript
npm install transform-key
```

### example
```javascript
let transformKey = require('transform-key')
let data = { old: 'string in old' }

transformKey({ old:'new' }, data)
// { new:'string in old' }

transformKey({ old:'new' }, data, true)
// { old:'string in old', new:'string in old' }

function parseString(oldKey): string | number{
    console.log(oldKey) // old
    return 'new'
}
transformKey({ old: parseString }, data, true)
// { old:'string in old', new:'string in old' }
```


