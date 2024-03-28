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
            distance: 20,
            currentPage: 1,
            lastPage: null,
            showModal: false
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
            <div class="col-12 col-md-6">
                <form @submit.prevent="searchApartments()">
                    <div class="input-group mb-4">
                        <button type="button" class="btn btn-light border" @click="showModal = !showModal"> <i class="fas fa-sliders"></i> filtri</button>
                        <input type="text" class="form-control" id="address" v-model="search_address" name="address" placeholder="inserisci Città o Indirizzo.." aria-label="inserisci Città o Indirizzo.." aria-describedby="address">
                        <button class="btn btn-light border"><i class="fas fa-magnifying-glass"></i> Cerca</button>
                    </div>

                    <div class="filters border rounded" v-if="showModal">
                        <div class="container">
                            <!-- header filtri -->
                            <div class="row justify-content-between align-items-center">
                                <div class="col-2">
                                    <button class="btn btn-light" @click="showModal = !showModal"><i class="fas fa-x"></i></button>
                                </div>
                                <div class="col-6">
                                    <h5>Filtri</h5>
                                </div>
                            </div>
                            <hr>
                            <!-- body filtri -->
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <h3>Filtra il raggio dei km</h3>
                                    <label for="distance" class="form-label">Raggio: {{ distance }}km</label>
                                    <input type="range" class="form-range" min="0" max="40" step="1" id="distance" name="distance" v-model="distance">
                                </div>
                                <div class="col-12 col-md-6">
                                </div>
                                <div class="col-12">
                                </div>
                            </div>
                    
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row row-gap-4">
            <div v-if="apartments.length == 0" class="col-12 text-center">
                <h2>Inserire appartmenti sponsorizzati </h2>
            </div>
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
<style lang="scss" scoped>
    .filters{
        background-color: white;
        position: absolute;
        padding: 20px;
        width: 60vw;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
    }
</style>