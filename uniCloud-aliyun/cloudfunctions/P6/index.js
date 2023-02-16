'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let res1 = await db.collection('uni_banner').get()
	let res2 = await db.collection('uni_banner').count()
	return res1
};
