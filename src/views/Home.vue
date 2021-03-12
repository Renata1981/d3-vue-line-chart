<template>
	<div>
		hello

		<lineGraph />
	</div>
</template>
<script>
import lineGraph from "../components/lineGraph";

export default {
	name: "Home",
	components: {
		lineGraph,
	},
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
