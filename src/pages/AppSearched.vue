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
        searchApartments(page_num){
            //eseguiamo la chimata API 
            axios.get(`${store.baseUrl}/api/apartments/${this.$route.params.address}`, { params: { page: page_num } }).then(response => {
                //controlliamo se ha restituito qualcosa
                if (response.data.success) {
                    console.log(response.data.apartments);
                    //recupero i risultati
                    this.apartments = response.data.apartments.data
                    this.currentPage = response.data.apartments.current_page;
                    this.lastPage = response.data.apartments.last_page;
                }else{
                    console.log('non è stato trovato nulla');
                }
            })
        }
    },
}
</script>
<template lang="">
    <div>

    </div>
</template>
<style lang="">
    
</style>