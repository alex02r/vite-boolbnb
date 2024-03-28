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
            rooms: null,
            beds: null,
            bathrooms: null,
            services: [],
            list_services: [
                {
                    name: 'wifi',
                    id: 1
                },
                {
                    name: 'phone',
                    id: 2
                },
                {
                    name: 'lavatrice',
                    id: 3
                },
                {
                    name: 'Riscoldamento',
                    id: 4
                }
            ],
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
                                <hr>
                                <div class="col-12">
                                    <h3>Stanze e letti</h3>
                                    <div class="mb-3">
                                        <h5>Camere</h5>
                                        <div class="d-flex gap-2 overflow-x-auto">
                                            <button class="btn rounded-pill px-4" :class="rooms == null ? 'btn-dark' : 'btn-light'" @click="rooms = null">qualsiasi</button>
                                            <button class="btn rounded-pill px-4" :class="rooms == 1 ? 'btn-dark' : 'btn-light'" @click="rooms = 1">1</button>
                                            <button class="btn rounded-pill px-4" :class="rooms == 2 ? 'btn-dark' : 'btn-light'" @click="rooms = 2">2</button>
                                            <button class="btn rounded-pill px-4" :class="rooms == 3 ? 'btn-dark' : 'btn-light'" @click="rooms = 3">3</button>
                                            <button class="btn rounded-pill px-4" :class="rooms == 4 ? 'btn-dark' : 'btn-light'" @click="rooms = 4">4</button>
                                            <button class="btn rounded-pill px-4" :class="rooms == 5 ? 'btn-dark' : 'btn-light'" @click="rooms = 5">5</button>
                                            <button class="btn rounded-pill px-4" :class="rooms == 6 ? 'btn-dark' : 'btn-light'" @click="rooms = 6">6</button>
                                            <button class="btn rounded-pill px-4" :class="rooms == 7 ? 'btn-dark' : 'btn-light'" @click="rooms = 7">7</button>
                                            <button class="btn rounded-pill px-4" :class="rooms == 8 ? 'btn-dark' : 'btn-light'" @click="rooms = 8">8+</button>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <h5>Letti</h5>
                                        <div class="d-flex gap-2 overflow-x-auto">
                                            <button class="btn rounded-pill px-4" :class="beds == null ? 'btn-dark' : 'btn-light'" @click="beds = null">qualsiasi</button>
                                            <button class="btn rounded-pill px-4" :class="beds == 1 ? 'btn-dark' : 'btn-light'" @click="beds = 1">1</button>
                                            <button class="btn rounded-pill px-4" :class="beds == 2 ? 'btn-dark' : 'btn-light'" @click="beds = 2">2</button>
                                            <button class="btn rounded-pill px-4" :class="beds == 3 ? 'btn-dark' : 'btn-light'" @click="beds = 3">3</button>
                                            <button class="btn rounded-pill px-4" :class="beds == 4 ? 'btn-dark' : 'btn-light'" @click="beds = 4">4</button>
                                            <button class="btn rounded-pill px-4" :class="beds == 5 ? 'btn-dark' : 'btn-light'" @click="beds = 5">5</button>
                                            <button class="btn rounded-pill px-4" :class="beds == 6 ? 'btn-dark' : 'btn-light'" @click="beds = 6">6</button>
                                            <button class="btn rounded-pill px-4" :class="beds == 7 ? 'btn-dark' : 'btn-light'" @click="beds = 7">7</button>
                                            <button class="btn rounded-pill px-4" :class="beds == 8 ? 'btn-dark' : 'btn-light'" @click="beds = 8">8+</button>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <h5>Bagni</h5>
                                        <div class="d-flex gap-2 overflow-x-auto">
                                            <button class="btn rounded-pill px-4" :class="bathrooms == null ? 'btn-dark' : 'btn-light'" @click="bathrooms = null">qualsiasi</button>
                                            <button class="btn rounded-pill px-4" :class="bathrooms == 1 ? 'btn-dark' : 'btn-light'" @click="bathrooms = 1">1</button>
                                            <button class="btn rounded-pill px-4" :class="bathrooms == 2 ? 'btn-dark' : 'btn-light'" @click="bathrooms = 2">2</button>
                                            <button class="btn rounded-pill px-4" :class="bathrooms == 3 ? 'btn-dark' : 'btn-light'" @click="bathrooms = 3">3</button>
                                            <button class="btn rounded-pill px-4" :class="bathrooms == 4 ? 'btn-dark' : 'btn-light'" @click="bathrooms = 4">4</button>
                                            <button class="btn rounded-pill px-4" :class="bathrooms == 5 ? 'btn-dark' : 'btn-light'" @click="bathrooms = 5">5</button>
                                            <button class="btn rounded-pill px-4" :class="bathrooms == 6 ? 'btn-dark' : 'btn-light'" @click="bathrooms = 6">6</button>
                                            <button class="btn rounded-pill px-4" :class="bathrooms == 7 ? 'btn-dark' : 'btn-light'" @click="bathrooms = 7">7</button>
                                            <button class="btn rounded-pill px-4" :class="bathrooms == 8 ? 'btn-dark' : 'btn-light'" @click="bathrooms = 8">8+</button>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <!-- servizi -->
                                <div class="col-12">
                                    <h3>Servizi</h3>
                                    <div class="mb-3">
                                        <h5>Servizi principali</h5>
                                        <div class="form-check">
                                            <div class="row row-gap-2">
                                                <div class="col-12 col-md-6" v-for="(service, index) in list_services" :key="index">
                                                    <input class="form-check-input" type="checkbox" :value="service.id" name="checks[]" :id="service.name" v-model="services">
                                                    <label class="form-check-label" :for="service.name">
                                                      {{service.name}}
                                                    </label>
                                                </div>
                                            </div>
                                          </div>
                                    </div>
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