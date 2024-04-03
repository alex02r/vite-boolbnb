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
                this.sponsorApartments = response.data.results;
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
                <h2>Cerca il tuo BnB <router-link :to="{ name:'search-apartments' }" class="btn btn-danger rounded-circle py-2"> <i class="fas fa-magnifying-glass-location"></i></router-link></h2>
            </div>
            <div class="col-12 text-center mb-5">
                <h1 class="fw-bold">Appartamenti in primo piano</h1>
                <p>Visualizzazione degli appartamenti sponsorizzati</p>
            <div class="row row-gap-4">
                <AppApartment v-for="(apartment, index) in sponsorApartments" :key="index" :app="apartment" ></AppApartment>
            </div>

            </div>
            <div class="col-lg-6 col-12 align-self-center">
                <a href="#" class="text-decoration-none"><h3>Visualizza tutti gli appartamenti</h3></a> 
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda adipisci quibusdam aliquam, asperiores maiores, nobis, harum ad nesciunt perferendis beatae exercitationem molestias odio et quos nam fugit corporis voluptatum esse.</p>
            </div>
            <div class="col-lg-6 col-12 mb-4">
                <a href="#" class="text-decoration-none"><img src="../../public/airbnb-img.jpg" alt="logo" width="600px"></a>
            </div>
            <div class="col-lg-6 col-12 float-lg-start d-lg-block d-sm-none mb-5">
                <a href="#" class="text-decoration-none"><img src="../../public/airbnb-uomo.jpg" alt="logo" width="600px"></a>
            </div>
            <div class="col-lg-6 col-12 align-self-center ps-lg-5 mb-lg-5">
                <a href="#" class="text-decoration-none"><h3>Contattaci</h3></a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim debitis natus recusandae quasi beatae aliquid totam consectetur ipsa consequatur, quos id, dolorem suscipit alias corrupti molestias sunt accusamus laboriosam!</p>
            </div>
            <div class="col-lg-6 col-12 float-lg-start d-lg-none mb-5">
                <a href="#" class="text-decoration-none"><img src="../../public/airbnb-uomo.jpg" alt="logo" width="600px"></a>
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