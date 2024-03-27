<script>
import { store } from '../store';
export default {
    props:{
        data: Object
    },
    data() {
        return {
            store        
        }
    },
    methods: {
        //funzione che restituisce l'url dell'immagine
        getImg(img){
            let path =`${store.baseUrl}/img/image.png` //immagine di default
            //controlle se l'immagine è presente
            if (img != null) {
                path = `${store.baseUrl}/storage/${img}`
            }
            //restituisco il path
            return path 
        }
    },
}
</script>
<template lang="">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <img :src="getImg(data.cover_img)" alt="" class="app-img">
        <!-- badge per la sponsorizzazione -->
        <span class="badge rounded-pill text-bg-light">Sponsorizzato</span>
        <div class="app-body">
            <h6 class="">{{ data.title }}</h6>
            <h6 class="text-secondary">{{ data.address }}</h6>
            <div class="info">
                <i class="fas fa-bed"></i> 2
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>