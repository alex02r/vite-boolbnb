<script>
import { store } from '../store';
export default {
    props: {
        app: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        //funzione che restituisce l'url dell'immagine
        getImg(img) {
            let path = `${store.baseUrl}/img/image.png` //immagine di default
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
        <router-link :to="{ name: 'apartment', params: { slug: app.slug,  id: app.id }  }" class="link-dark link-underline-opacity-0 link-underline-opacity-100-hover">
            <div class="app-header">
                <img :src="getImg(app.cover_img)" alt="" class="app-img">
                <span v-if="app.sponsors.length > 0" class="badge rounded-pill text-bg-light">Sponsorizzato</span>
            </div>
        </router-link>
        <!-- badge per la sponsorizzazione -->
        <div class="app-body">
            <router-link :to="{ name: 'apartment', params: { slug: app.slug,  id: app.id }  }" class="link-dark link-underline-opacity-0 link-underline-opacity-100-hover">
                <h6>{{ app.title }}</h6>
            </router-link>
            <h6 class="text-secondary">{{ app.address }}</h6>
            <div class="info">
                <span><i class="fa-solid fa-house"></i> {{ app.rooms }} &nbsp;</span>
                <span><i class="fas fa-bed"></i> {{ app.beds }} &nbsp;</span>
                <span><i class="fa-solid fa-bath"></i> {{ app.bathrooms }}</span>
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
        height: 300px;
        object-fit: cover;
        width: 100%;

        @media only screen and (min-width: 1400px) {
            height: 205px;
        }

        @media only screen and (min-width: 576px) and (max-width: 1399px) {
            height: 145px;
        }
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
</style>
