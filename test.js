let assert = require('assert');
let transformKey = require('./');

let o = {
    old: 'my in o-key::a'
};
let o1 = {
    new: 'my in o-key::a'
};
let o2 = {
    old: 'my in o-key::a',
    new: 'my in o-key::a'
};

let transform = transformKey(o, {
    old: 'new'
});
let result = [transform, o1].map(JSON.stringify);
assert.equal(...result);
console.log('ok');


let transform2 = transformKey(o, {
    old: 'new'
}, true);
let result2 = [transform2, o2].map(JSON.stringify);
assert.equal(...result2);
console.log('ok');

let transform3 = transformKey(o, {
    old() {
        return 'n' + 'e' + 'w'
    }
}, true);
let result3 = [transform3, o2].map(JSON.stringify);
assert.equal(...result3);
console.log('ok');


let transform4 = transformKey(o, {
    old() {
        return 'n' + 'e' + 'w' + '1'
    }
}, true);
let result4 = [transform4, o2].map(JSON.stringify);
assert.equal(...result4);
console.log('ok');