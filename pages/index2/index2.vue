<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			uniCloud.callFunction({
				name: 'P6'
			}).then(res => {
				console.log(res.result.data);
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">

</style>
