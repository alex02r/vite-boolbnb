<script>
import { store } from '../store.js';

export default {

  data() {
    return {
      store
    }
  },
}
</script>

<template lang="">
  <header>
    <div class='d-flex'>
      <img src="../assets/logo.png" alt="">
      <h1 class="logo fs-3 fw-bold pt-3">ooBnB</h1>
    </div>
            
           <div>
            <ul class="list-unstyled d-flex align-items-center fw-bold text-body-tertiary">
                <li class="m-2 p-2" v-for="item, index in store.menu" :key="index">
                    <!-- <router-link class="text-body-tertiary link-secondary link-underline-opacity-0 :to="{name: item.name}"> -->{{item.label}}<!-- </router-link> -->
                </li> 
                <li class="m-2 p-2"><a class="text-body-tertiary link-secondary link-underline-opacity-0" href="http://127.0.0.1:8000/login">Login</a></li>
            </ul>
           </div>
        </header>
</template>

<style lang="scss">
@use './styles/general.scss';

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

  li:active {
    color: black;
  }
}

.logo {
  color: #F15B5D;
}
</style>