<template>
  <div id="app">
    <MainPage></MainPage>
  </div>
</template>

<script>
import MainPage from '@/components/MainPage';
export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
#app {
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
