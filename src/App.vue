<template>
  <div>
    <h1>Jcheez's Zi Char</h1>
    <app_header v-if="$route.name!='Modify'"></app_header>
    <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  metaInfo: {
    title: "Jcheez's Zi Char"
  },
  components: {
    app_header: Header
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
h1 {
  text-align: center;
  line-height: 120px;
  font-size: 50px;
  color: white;
  font-family: Fantasy;
  background-color: #92a8d1;
  height: 100px;
}
</style>
