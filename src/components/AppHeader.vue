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
  <header>
    <div class='d-flex'>
      <img src="../assets/logo.png" alt="">
      <h1 class="logo fs-3 fw-bold pt-3">oolBnB</h1>
    </div>
            
    <ul class="list-unstyled d-flex align-items-center fw-bold text-body-tertiary">
      <li class="m-2 p-2" v-for="item, index in store.menu" :key="index" @click="clickIndex=index" :class="clickIndex===index ? 'active' : ''">
                    <router-link class="text-body-tertiary link-secondary link-underline-opacity-0" :to="{name: item.name}">{{item.label}}</router-link>
      </li> 
    </ul>
    <div>
      <a class="m-2 p-2 text-body-tertiary  fw-bold link-secondary link-underline-opacity-0" href="http://127.0.0.1:8000/login">Accedi</a>
    </div>
  </header>
</template>

<style lang="scss">
@use '../styles/generals.scss';

header {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  img {
    width: 50px;
    height: 50px;
  }

  li:hover {
    background-color: rgb(213, 213, 213);
    border-radius: 25px;
  }

  .active {
    color: black;
  }
}

.logo {
  color: #F15B5D;
}
</style>