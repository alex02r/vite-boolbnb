<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store.js';
import axios from 'axios';
import tt from '@tomtom-international/web-sdk-maps';

export default {
    name: 'AppMap',
    props: {
        lat: String,
        lon: String,
    },

    data() {
        return {
            store,
        }
    },
    mounted() {
        this.setupMap();
    },
    methods: {
        setupMap() {
            let lon = this.lon;
            let lat = this.lat;
            let center = [lon, lat];

            const map = tt.map({
                key: '9CMceOdItBPcoD8aScoApx2EnxYIj4u9',
                container: 'map',
                center: center,
                zoom: 15,
                radius: 20000
            });

            const marker = new tt.Marker().setLngLat(center).addTo(map);
            
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
        <div class="col-12">
            <div id='map' class="map-container rounded-3"></div>
        </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>

.map-container {
    height: 400px;
}

</style>