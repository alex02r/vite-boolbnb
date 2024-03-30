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
    <div>
      <router-link :to="{name:`home`}" @click="clickIndex=0" ><img class="w-75" src="../assets/logo.png" alt=""></router-link>
    </div>
            
    <ul class="list-unstyled d-none d-md-flex align-items-center fw-bold m-1 ">
      <li >
                    <router-link class="m-2 p-2 bg-grey link-opacity-75 link-secondary link-underline-opacity-0" v-for="item, index in store.menu" :key="index" @click="clickIndex=index" :class="clickIndex===index ? 'link-dark link-opacity-100' : ''" :to="{name: item.name}">{{item.label}}</router-link>
      </li> 
    </ul>

    <div class="d-none d-md-inline-block">
      <a class="mx-0 p-2 bg-grey link-opacity-75 fw-bold link-secondary link-underline-opacity-0" href="http://127.0.0.1:8000/user">Accedi</a>
      <a class="mx-0 p-2 bg-grey link-opacity-75 fw-bold link-secondary link-underline-opacity-0" href="http://127.0.0.1:8000/register">Registrati</a>
    </div>

    <div class="dropdown d-md-none">
  <button class="btn mt-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="fa-solid fa-bars fa-xl" style="color: #f15b5d;"></i>
  </button>
  <ul class="dropdown-menu">
    <li><router-link class="dropdown-item" :to="{name:`home`}">Home</router-link></li>
    <li><router-link class="dropdown-item" :to="{name:`search-apartments`}">Cerca</router-link></li>
    <li><a class="dropdown-item" href="http://127.0.0.1:8000/user">Accedi</a></li>
    <li><a class="dropdown-item" href="http://127.0.0.1:8000/register">Registrati</a></li>
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

  .bg-grey:hover {
    background-color: rgb(213, 213, 213);
    border-radius: 25px;
  }

}
</style>