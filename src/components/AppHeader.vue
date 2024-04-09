<script>
import { store } from '../store.js';

export default {

  data() {
    return {
      clickIndex: 0,
      store
    }
  },
}


</script>

<template lang="">

  <header class="shadow-sm">
    <div>
      <router-link :to="{name:`home`}" @click="clickIndex=0" ><img class="w-75" src="../assets/logo.png" alt=""></router-link>
    </div>
            
    <ul class="list-unstyled d-none d-md-flex align-items-center fw-bold m-1 me-5">
      <li >
        <router-link class="m-2 p-2 bg-grey link-opacity-75 link-secondary link-underline-opacity-0" v-for="item, index in store.menu" :key="index" @click="clickIndex=index" :class="clickIndex===index ? 'link-dark link-opacity-100' : ''" :to="{name: item.name}">{{item.label}}</router-link>
      </li> 
    </ul>
    <div class="d-flex align-items-center ms-5">
      <a class="mt-2 ms-5" href="http://127.0.0.1:8000/user"><i class="fa-solid fa-user fa-xl" style="color: #f15b5d;"></i></a>
      <div class="dropdown d-md-none">
        <button class="btn mt-2 py-3 px-2 ms-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-bars fa-xl" style="color: #f15b5d;"></i>
        </button>
        <ul class="dropdown-menu">
          <li><router-link class="dropdown-item" :to="{name:`home`}">Home</router-link></li>
          <li><router-link class="dropdown-item" :to="{name:`search-apartments`}">Cerca</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  .bg-grey:hover {
    background-color: rgb(213, 213, 213);
    border-radius: 25px;
  }

}
</style>