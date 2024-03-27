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
        <div class="d-md-flex">
            <ul class="list-unstyled">
                <li class="fw-bold">Assistenza</li>
                <li>Centro Assistenza</li>
                <li>BoolCover</li>
                <li>Antidiscriminazione</li>
                <li>Supporto alla disabilità</li>
                <li>Opzioni di cancellazione</li>
                <li>Segnala problema nel quartiere</li>
            </ul>
            <ul class="list-unstyled">
                <li class="fw-bold">Ospitare</li>
                <li>Apri un Airbnb</li>
                <li>Risorse per gli host</li>
                <li>Forum della community</li>
                <li>Ospitare responsabilmente</li>
                <li>Partecipa a una lezione gratuita sull'ospitalità</li>
                <li>Segnala problema nel quartiere</li>
            </ul>
            <ul class="list-unstyled">
                <li class="fw-bold">Boolbnb</li>
                <li v-for="item, index in store.menu" :key="index">
                    <!-- <router-link class="text-body-tertiary link-secondary link-underline-opacity-0 :to="{name: item.name}"> -->{{item.label}}<!-- </router-link> -->
                </li>
            </ul>
    </div>
    <div>
        <hr>
    </div>
<div class="d-flex justify-content-between">
    <p>© 2024 Boolbnb, Inc.  · Privacy · Termini · Mappa del sito · Dettagli dell'azienda</p>
    <div>
        <i class="p-2 fa-brands fa-square-facebook fa-lg"></i>
        <i class="p-2 fa-brands fa-square-instagram fa-lg"></i>
        <i class="p-2 fa-brands fa-square-x-twitter fa-lg"></i>
    </div>
</div>
</div>
  </footer>
   
</template>

<style lang="scss">
@use './styles/general.scss';

footer {
    background-color: #F7F7F7;
    padding: 20px 0;

    li {
        padding: 5px;
    }

    li:hover {
        background-color: rgb(213, 213, 213);
    }

    ul {
        padding: 10px 150px;
    }
}
</style>