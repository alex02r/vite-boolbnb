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
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 cursor-pointer">
        <div class="app-header">
            <img :src="getImg(data.cover_img)" alt="" class="app-img">
            <span class="badge rounded-pill text-bg-light">Sponsorizzato</span>
        </div>
        <!-- badge per la sponsorizzazione -->
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
    .cursor-pointer{
        cursor: pointer;
    }
    .app-header{
        position: relative;
        .app-img{
            border-radius: 0.5rem
        }
        .badge{
            position: absolute;
            top: 10px;
            left: 10px
        }
    }
    .app-body{
        margin: 0.5rem 0;
        h6{
            line-height: 0.8rem;
        }
        .text-secondary{
            font-weight: 400;
        }
    }
</style>