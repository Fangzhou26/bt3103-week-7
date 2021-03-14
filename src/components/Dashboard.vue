<template>
  <div>
    <BarChart></BarChart>
    <LineChart></LineChart>
  </div>
</template>

<script>
import BarChart from "./charts/BarChart.vue";
import LineChart from "./CallAPI.vue";

export default {
  metaInfo: {
    title: "Jcheez's Zi Char - Dashboard"
  },
  components: {
    BarChart,
    LineChart
  }
};
</script>

<style>
</style>