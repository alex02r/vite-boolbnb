<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter

  },
  data() {
    return {

    }
  },
}
</script>
<template lang="">
  <AppHeader/>
  <router-view></router-view>
  <AppFooter/>
</template>
<style lang="scss">

</style>
