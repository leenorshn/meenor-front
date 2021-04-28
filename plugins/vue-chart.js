import Vue from 'vue'
const { Line } =require('vue-chartjs')

Vue.component('my-line',({
    extends: Line,
	props: ['data', 'options'],
	mounted () {
		this.renderChart(this.data, this.options,)
	}
}))