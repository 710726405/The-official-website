<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-foot></v-foot>
  </div>
</template>

<script>
  import Header from '@/components/Head'
  import Foot from '@/components/Foot'
  export default {
    name: 'app',
    components: {
      'v-header': Header,
      'v-foot': Foot
    }
  }
</script>

<style>

</style>
