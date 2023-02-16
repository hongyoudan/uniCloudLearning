'use strict';
exports.main = async (event, context) => {
	let {
		name,
		age
	} = event
	return `姓名：${name},年龄：${age}`
};
