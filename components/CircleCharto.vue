<template>
    <div>
        <circle-chart :data="data"/>
    </div>
</template>
<script>
export default {
    data() {
    return {
      btn: [
        { label: "Today", value: "day" },
        { label: "This Week", value: "week" }
      ],
      chartData: null,
      data: {
        day: [1, 3, 5, 3, 1],
        week: [12, 14, 16, 18, 11, 13, 15]
      },
      labels: {
        day: [8, 10, 12, 14, 16],
        week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      radio: "day"
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: this.labels[this.radio],
        datasets: [
          {
            borderColor: "#81894e",
            data: this.data[this.radio],
            label: "Foo"
          }
        ]
      };
    },
    updateChart() {
      this.$nextTick(() => {
        this.fillData();
      });
    }
  }
}
</script>