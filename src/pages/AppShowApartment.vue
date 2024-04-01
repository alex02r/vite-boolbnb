<script>
import { store } from '../store';
import axios from 'axios';
import AppMessageForm from '../components/AppMessageForm.vue';
export default {
    components:{
        AppMessageForm
    },
    data() {
        return {
            store,
            apartment: []
        }
    },
    created() {
        this.getApartment();
    },
    methods: {
        getApartment(){
            axios.get(`${store.baseUrl}/api/single/apartment/${this.$route.params.slug}/${this.$route.params.id}`).then(response => {
                if (response.data.success) {
                    this.apartment = response.data.apartment[0];
                }else{
                    this.$router.push({ name: 'not-found'})
                }
            })
        },
        getImg(img){
            let path =`${store.baseUrl}/img/image.png` //immagine di default
            //controlle se l'immagine è presente
            if (img != null) {
                path = `${store.baseUrl}/storage/${img}`
            }
            //restituisco il path
            return path 
        }
/* 
        checkDate() {
            if (new Date(this.date) < new Date()) {
                this.dateError = true;
            } else {
                this.dateError = false;
                this.change();
            }
        },

        change(){
            if(!this.dateError){
                this.showError = true;
            }
        } */
    },
}
</script>

<template>
    <div class="container my-4">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6">
                <img :src="getImg(apartment.cover_img)" alt="" class="img-fluid rounded-3">
                <div class="">
                </div>
            </div>
            <div class="col-12 col-md-6 h-100">
                <h2>{{ apartment.title }}</h2>
                <h4 class="text-secondary">{{ apartment.address }}</h4>
                <ul class="list-unstyled d-flex gap-2 mt-3">
                    <li><i class="fa-solid fa-house color-pink"></i> {{ apartment.square_meters }} mq -</li>
                    <li><i class="fa-solid fa-bed color-pink"></i> {{ apartment.rooms }} Stanze -</li>
                    <li><i class="fa-solid fa-toilet color-pink"></i> {{ apartment.bathrooms }} Bagni</li>
                </ul>
                <div class="mt-3" v-if="apartment.services.length > 0">
                    <h4>Servizi: </h4>
                    <ul class="list-unstyled">
                        <li class="" v-for="(service, index) in apartment.services" :key="index">
                            <i class="fa-solid fa-circle-check color-pink"></i> {{ service.name }}
                        </li>
                    </ul>
                </div>
                <div class="mt-3" v-else>
                    <h5>Nessun servizio</h5>
                </div>
                <!-- <form action="">
                    <div class="w-100 h-100 d-flex justify-content-end">
                        <input onchange="checkDate()" id="date_of_birth" type="date" class="form-control input-data"
                        name="date_of_birth" value="{{ old('date_of_birth') }}" required
                        autocomplete="date_of_birth" autofocus>
                        <span v-if="showError" id="dateError" class="invalid-feedback" role="alert">
                            Devi selezionare una data futura
                        </span>
                    </div>

                    <div class="w-100 h-100 d-flex justify-content-end">
                        <button class="btn-buy" onclick="clickButton()" disabled="!dateError">Affitta</button>
                    </div>
                </form> -->
            </div>
        </div>
    </div>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-12 text-center mt-5 mb-2">
                <h3>Contatta l'host per maggiori informazioni!</h3>
            </div>
            <div class="col-md-7">
                <AppMessageForm :apartmentId="apartment.id" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.color-pink{
    color: #F15B5D;
}

li{
    font-size: 18px;
}

</style>