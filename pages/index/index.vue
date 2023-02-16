<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {
			uniCloud.callFunction({
				name: 'P3',
				data: {
					name: '张三',
					age: '20'
				}
			}).then(res => {
				console.log(res);
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">

</style>
