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
module.exports = function transformKey(keys, o, keepOld = false) {
	let source = { ...o };

	Object.keys(keys).forEach((oldKey) => {
		let newKey = keys[oldKey];
		if (!/string|number/.test(typeof newKey)) return;
		source[newKey] = source[oldKey];

		if (!keepOld) {
			delete source[oldKey];
		}
	});

	return source;
};
