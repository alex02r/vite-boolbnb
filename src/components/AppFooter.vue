<script>
import { store } from '../store.js';

export default {

    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
<footer>
    <div class="container">
        <!-- <div class="row">
            <div class="col"> -->
                <div class="d-md-flex justify-content-between">
                    <ul class="list-unstyled">
                        <li class="fw-bold li-title">Assistenza</li>
                        <li>Centro Assistenza</li>
                        <li>BoolCover</li>
                        <li>Antidiscriminazione</li>
                        <li>Supporto alla disabilità</li>
                        <li>Opzioni di cancellazione</li>
                        <li>Segnala problema nel quartiere</li>
                    </ul>
                    <ul class="list-unstyled">
                        <li class="fw-bold li-title">Ospitare</li>
                        <li>Apri un Airbnb</li>
                        <li>Risorse per gli host</li>
                        <li>Forum della community</li>
                        <li>Ospitare responsabilmente</li>
                        <li>Partecipa a una lezione gratuita sull'ospitalità</li>
                        <li>Segnala problema nel quartiere</li>
                    </ul>
                    <ul class="list-unstyled">
                        <li class="fw-bold li-title">Boolbnb</li>
                        <li v-for="item, index in store.menu" :key="index">
                            <router-link class="link-dark link-underline-opacity-0" :to="{name: item.name}">{{item.label}}</router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <hr>
                </div>
                <div class="d-md-flex text-center justify-content-md-between align-items-center">
                    <p class="m-0">© 2024 Boolbnb, Inc.  · Privacy · Termini · Mappa del sito · Dettagli dell'azienda</p>
                    <div>
                        <i class="p-2 social fa-brands fa-square-facebook"></i>
                        <i class="p-2 social fa-brands fa-square-instagram"></i>
                        <i class="p-2 social fa-brands fa-square-x-twitter"></i>
                    </div>
                </div>
            <!-- </div>
        </div> -->
    </div> 
</footer>
   
</template>
<style lang="scss" scoped>

footer {
    background-color: #F7F7F7;
    padding: 20px 0;

    li {
        padding: 5px;
    }

    li:hover {
        background-color: rgb(213, 213, 213);
        border-radius: 10px;
    }

    .li-title:hover{
        background-color: transparent;
    }

    ul {
        padding: 10px 20px;
    }
    .social{
        font-size: 28px;
    }
}
</style>