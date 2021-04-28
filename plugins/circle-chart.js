import Vue from 'vue'
const { Doughnut } =require('vue-chartjs')

Vue.component('circle-chart',({
    extends: Doughnut,
	props: ['data', 'options'],
	mounted () {
		this.renderChart(this.data, this.options,)
	}
}))