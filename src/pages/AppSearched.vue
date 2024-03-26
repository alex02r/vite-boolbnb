<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    data() {
        return {
            store
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