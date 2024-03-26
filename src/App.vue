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
  <div>
    <AppHeader/>
    <router-view></router-view>
  </div>
  <AppFooter/>
</template>

<style lang="scss"></style>
