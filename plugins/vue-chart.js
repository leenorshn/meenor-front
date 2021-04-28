import Vue from 'vue'
const { Line } =require('vue-chartjs')

Vue.component('my-line', Line.extend({
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}))