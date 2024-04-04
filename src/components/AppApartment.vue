<script>
import { store } from '../store';
export default {
    props:{
        app: Object
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
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 cursor-pointer" v-if="app.show">
        <div class="app-header">
            <img :src="getImg(app.cover_img)" alt="" class="app-img">
            <span class="badge rounded-pill text-bg-light">Sponsorizzato</span>
        </div>
        <!-- badge per la sponsorizzazione -->
        <div class="app-body">
            <router-link :to="{ name: 'apartment', params: { slug: app.slug,  id: app.id }  }" class="link-dark link-underline-opacity-0 link-underline-opacity-100-hover">
                <h6>{{ app.title }}</h6>
            </router-link>
            <h6 class="text-secondary">{{ app.address }}</h6>
            <div class="info">
                <i class="fas fa-bed"></i> {{ app.beds }}
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
            border-radius: 0.5rem;
            min-height: 250px;
            object-fit: cover;
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