<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
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
        searchApartments(){
            //eseguiamo la chimata API 
            axios.get(`${store.baseUrl}/api/apartments/${this.$route.params.address}`).then(response => {
                //controlliamo se ha restituito qualcosa
                if (response.data.success) {
                    console.log(response.data.apartments);
                    //recupero i risultati
                    this.apartments = response.data.apartments.data
                }else{
                    console.log(response.data.error);
                }
            })
        }
    },
}
</script>
<template lang="">
    <div v-for="(apartment, index) in apartments" :key="index">
        <div v-if="apartment.show">
            <h5>{{ apartment.title }}</h5>
        </div>
    </div>
    <div class="row"> 
        <div class="col-12">
            <ul class="pagination d-flex justify-content-center">
                <li> <button :class="currentPage == 1 ? 'disabled' : ''" class="btn btn-square btn-outline-success me-3 fw-bold" @click="searchApartments(currentPage - 1)">Precedente</button> </li>
                <li> <button :class="currentPage == lastPage ? 'disabled' : ''" class="btn btn-outline-success fw-bold" @click="searchApartments(currentPage + 1)">Successivo</button> </li>
            </ul>
        </div>
    </div>
</template>
<style lang="">
    
</style>