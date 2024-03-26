<script>
import store from '../store.js';
import axios from 'axios';
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        //funzione che esegue la ricerca degli partments
        searchApartments(){
            let value = ''/* this.$router.params.value */
            //eseguiamo la chimata API 
            axios.get(`${store.baseUrl}/search/${value}`).then(response => {
                //controlliamo se ha restituito qualcosa
                if (response.data.apartments) {
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