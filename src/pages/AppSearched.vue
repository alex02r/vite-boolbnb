<script>
import AppApartment from '../components/AppApartment.vue';
import { store } from '../store.js';
import axios from 'axios';
export default {
    components:{
        AppApartment
    },
    data() {
        return {
            store,
            apartments: [],
            currentPage: 1,
            lastPage: null
        }
    },
    created(){
        this.searchApartments();
    },
    methods: {
        //funzione che esegue la ricerca degli partments
        async searchApartments(){
            try {
                //eseguiamo la chimata API 
                const { data } = await axios.get(`${store.baseUrl}/api/search`, { params:{ address: this.$route.params.address, distance:20000 } });
                this.apartments = data.apartments
            } catch (error) {
                console.error(error);
            }
            
        }
    },
}
</script>
<template lang="">
    <div class="container my-4">
        <div class="row justify-content-center">
            <form @submit.prevent="searchApartments()">
                
            </form>
        </div>
        <div class="row row-gap-4">
            <AppApartment v-for="(apartment, index) in apartments" :key="index" :app="apartment" ></AppApartment>
        </div>
    </div>
<!-- paginazione 
    <div class="row"> 
        <div class="col-12">
            <ul class="pagination d-flex justify-content-center">
                <li> <button :class="currentPage == 1 ? 'disabled' : ''" class="btn btn-square btn-outline-success me-3 fw-bold" @click="searchApartments(currentPage - 1)">Precedente</button> </li>
                <li> <button :class="currentPage == lastPage ? 'disabled' : ''" class="btn btn-outline-success fw-bold" @click="searchApartments(currentPage + 1)">Successivo</button> </li>
            </ul>
        </div>
    </div>
-->
</template>
<style lang="">
    
</style>