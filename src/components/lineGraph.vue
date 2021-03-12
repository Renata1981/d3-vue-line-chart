<template>
	<div class="container">
		<div class="row">
			<div class="col-6">
				<v-chart v-bind:chartData="lineGraphData"></v-chart>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "lineGraph",
	data() {
		return {
			interVal: null,

			lineGraphData: {
				chartType: "lineGraph",
				selector: "lineGraph",
				title: "Line Graph",
				subtitle: "Sales by month",
				width: 600,
				height: 500,
				goal: 600,
				metric: ["value"],
				dim: "time",
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
],
				label: true,
				legends: {
					enabled: true,
					height: 25,
					width: 50,
				},
				overrides: {
					palette: {
						fill: ["#34495E", "#4fc08d"],
						stroke: "#41B883",
					},
				},
			},
		};
	},
	destroyed() {
		clearInterval(this.interVal);
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.logo {
	width: 200px;
}
</style>
