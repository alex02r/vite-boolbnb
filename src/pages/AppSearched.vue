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
            search_address: '',
            currentPage: 1,
            lastPage: null
        }
    },
    methods: {
        //funzione che esegue la ricerca degli partments
        async searchApartments(){
            try {
                //eseguiamo la chimata API 
                const { data } = await axios.get(`${store.baseUrl}/api/search`, { params:{ address: this.search_address, distance:20000 } });
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
            <div class="col-6">
                <form @submit.prevent="searchApartments()">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" id="address" v-model="search_address" name="address" placeholder="inserisci Città o Indirizzo.." aria-label="inserisci Città o Indirizzo.." aria-describedby="address">
                        <button class="btn btn-light border"><i class="fas fa-magnifying-glass"></i> Cerca</button>
                      </div>
                </form>
            </div>
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