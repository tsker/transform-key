/**
 * pick object oldkey to newkey
 *
 * @param {object} keys
 * @param {object} o
 * @param {boolean} [keepOld=false]
 * 		true,  Keep the old key
 * 		false, delete the old key
 *
 * @return {object} new object
 */

function hasKey(o, key) {
    return key in o
}

module.exports = function transformKey(keys, o, keepOld = false) {
    let result = { ...o }

    Object.keys(keys).forEach((oldKey) => {

        if (!hasKey(result, oldKey)) {
            return
        }

        let newKey = keys[oldKey];

        if (typeof newKey === 'function') {
            newKey = newKey(oldKey)
        }

        result[newKey.toString()] = result[oldKey];

        if (!keepOld) {
            delete result[oldKey];
        }
    });

    return result;
};