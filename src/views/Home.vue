<template>
<div>
	<div>
		hello 2
		<lineGraph :id="'2'" :data="data2"/>
		<p>
            <br />
            <br />
         </p>
	</div>

	<div>
		hello
		<lineGraph :id="'1'" :data="data"/>
		<p>
            <br />
            <br />
         </p>
	</div>
</div>	
</template>
<script>
import lineGraph from "../components/lineGraph";

export default {
	name: "Home",
	components: {
		lineGraph,
	},
	data () {
		return {
			idx:7,
			id1:1,
			id2:2,
			data2: [
				{
					time: 6,
					value: 75,
				},
				{
					time: 6.5,
					value: 95,
				}
			],
			data: [
				{
					time: 0.5,
					value: 75,
				},
				{
					time: 1,
					value: 15,
				},
				{
					time: 1.5,
					value: 90,
				},
				{
					time: 2,
					value: 30,
				},
				{
					time: 2.5,
					value: 10,
				},
				{
					time: 3,
					value: 99,
				},
				{
					time: 3.5,
					value: 10,
				},
				{
					time: 4,
					value: 96,
				},
				{
					time: 4.5,
					value: 79,
				},
				{
					time: 5,
					value: 10,
				},
				{
					time: 6,
					value: 90,
				},
				{
					time: 6.5,
					value: 10,
				},
			]
		}
	},
	methods: {
		addJson() {
			this.data.push({time : this.idx, value: 4})
			this.data2.push({time : this.idx, value: 4})
			this.idx = this.idx + 0.5
		}
	},
	mounted()  {
		setInterval(() => {this.addJson()},30000)
	}
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
