<template>
  <div id="app">
    <v-header v-if="$route.name === 'Index'"></v-header>
    <v-headertwo v-else></v-headertwo>
    <router-view></router-view>
    <v-foot></v-foot>
  </div>
</template>

<script>
  import Header from '@/components/Head'
  import Headertwo from '@/components/Headtwo'
  import Foot from '@/components/Foot'
  export default {
    name: 'app',
    components: {
      'v-header': Header,
      'v-headertwo': Headertwo,
      'v-foot': Foot
    }
  }
</script>

<style>

</style>
