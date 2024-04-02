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
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 cursor-pointer">
        <div class="app-header">
            <img :src="getImg(app.cover_img)" alt="" class="app-img">
            <span class="badge rounded-pill text-bg-light">Sponsorizzato</span>
        </div>
        <!-- badge per la sponsorizzazione -->
        <div class="app-body">
            <router-link :to="{ name: 'apartment', params: { slug: app.slug,  id: app.id }  }">
                <h6 class="">{{ app.title }}</h6>
            </router-link>
            <h6 class="text-secondary">{{ app.address }}</h6>
            <div class="info">
                <i class="fas fa-bed"></i> 2
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .cursor-pointer {
        cursor: pointer;
    }

    .app-header {
        position: relative;

        .app-img {
            border-radius: 0.5rem;
            max-height: 300px;
            object-fit: cover;
            width: 100%;
        }

        .badge {
            position: absolute;
            top: 10px;
            left: 10px;
        }
    }

    .app-body {
        margin: 0.5rem 0;

        h6 {
            line-height: 1.5rem;
        }

        .text-secondary {
            font-weight: 400;
        }
    }

    @media (max-width: 768px) {
        .app-header .app-img {
            max-height: 150px;
        }

        .app-body {
            margin: 0.2rem 0;

            h6 {
                font-size: 0.9rem;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        .app-header .app-img {
            max-height: 200px;
        }

        .app-body {
            margin: 0.25rem 0;

            h6 {
                font-size: 0.95rem;
            }
        }
    }

</style>
