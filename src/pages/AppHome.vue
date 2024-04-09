<!-- SEZIONE JS SCRIPT -->
<script>
import AppMessageForm from '../components/AppMessageForm.vue'
import AppApartment from '../components/AppApartment.vue';
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'Home',
    components: {
        AppMessageForm,
        AppApartment
    },
    data() {
        return {
            sponsorApartments: [],
        }
    },
    created() {
        this.getSponsorApartment()
    },
    methods: {
        getSponsorApartment() {

            axios.get(`${store.baseUrl}/api/sponsor`).then((response) => {
                if (response.data.success) {
                    this.sponsorApartments = response.data.results
                }
               
            })
 
        }
    }
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <div class="container-fluid jumbo">
        <div class="row justify-content-center">
            <h1 class="logo fw-bold pt-3 home-title">BoolBnB</h1>
        </div>
    </div>
    <div class="container my-5"> 
        <div class="row justify-content-center">
            <div class="col-12 mb-5 text-center">
                <h2>Cerca il tuo BnB <router-link :to="{ name:'search-apartments' }" class="btn btn-danger rounded-pill"> <i class="fas fa-magnifying-glass-location"></i></router-link></h2>
            </div>
            <div class="col-12 text-center mb-5">
                <h1 class="fw-bold mb-5">Appartamenti in primo piano</h1>
                <h4 v-if="sponsorApartments.length == 0 ">Non ci sono appartamenti consigliati </h4>
            <div class="row justify-content-center row-gap-4">
                <AppApartment v-for="(apartment, index) in sponsorApartments" :key="index" :app="apartment" ></AppApartment>
            </div>

            </div>
            <div class="col-lg-6 col-12 align-self-center">
                <a href="http://localhost:5174/searched" class="text-decoration-none"><h3>Cerca la tua prossima esperienza indimenticabile</h3></a> 
                <p>Ricerca la tua prossima destinazione e goditi una meritata vacanza da solo, in compagnia dei tuoi amici o in famiglia! Puoi scegliere tra località di mare, luoghi lontani dalla civiltà oppure le più grandi città del mondo.</p>
            </div>
            <div class="col-lg-6 col-12 mb-4">
                <a href="http://localhost:5174/searched" class="text-decoration-none"><img src="../../public/airbnb-img.jpg" alt="logo" width="600px"></a>
            </div>
            <div class="col-lg-6 col-12 float-lg-start d-none d-lg-block mb-5">
                <a href="http://127.0.0.1:8000/user" class="text-decoration-none"><img src="../../public/airbnb-uomo.jpg" alt="logo" width="600px"></a>
            </div>
            <div class="col-lg-6 col-12 align-self-center ps-lg-5 mb-lg-5">
                <a href="http://127.0.0.1:8000/user" class="text-decoration-none"><h3>Sei nuovo? Registrati subito!</h3></a>
                <p>Se hai un appartmaneto, una villa o una proprietà da voler affittare, noi possiamo aiutarti grazie alla nostra innovativa piattaforma. Grazie alle nostre sponsorizzazioni personalizzate, potrai collocarti tra i primi risultati di ricerca nella tua zona e ricevere più richieste.</p>
            </div>
            <div class="col-lg-6 col-12 float-lg-start d-lg-none mb-5">
                <a href="http://127.0.0.1:8000/user" class="text-decoration-none"><img src="../../public/airbnb-uomo.jpg" alt="logo" width="600px"></a>
            </div>
        </div>
    </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
.jumbo {
    background-image: url('../../public/img-jumbo.jpg');
    background-size: cover;
    background-position: center;
    height: 390px;
    position: relative;
    text-align: center;

    .home-title {
        font-size: 65px;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

h3,
h1 {
    color: #F15B5D;
    ;
}

img {
    border-radius: 10px;
}
</style>