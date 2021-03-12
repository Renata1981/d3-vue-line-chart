<template>
	<div class="container">
		<div class="row">
			<div class="col-6">
				<v-chart v-bind:chartData="setLinearGraphData"></v-chart>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "lineGraph",
   props: ['data'],
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
        data: [],
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
  computed: { 
		setLinearGraphData() { 
      this.lineGraphData.data = this.data
      return this.lineGraphData
    }
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
