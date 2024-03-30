<script>
import { store } from '../store';
import axios from 'axios';
export default {
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
                    console.log(response.data);
                    this.apartment = response.data.apartment;
                }else{
                    console.log(response.data.error);
                    this.$router.push({ name: 'not-found'})
                }
            })
        },

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
        }
    },
}
</script>

<template>
    <div>
        <div class="container my-4">
            <div class="row justify-content-center">
                <div class="col-6">
                    <img :src="getImg(apartment.cover_img)" alt="" class="img-fluid">
                    <div class="">
                    </div>
                </div>
                <div class="col-6 h-100">
                    <h2>{{ apartment.title }} Title</h2>
                    <h6 class="text-secondary">{{ apartment.address }} Address</h6>
                    <div class="info">
                        <i class="fas fa-bed"></i> 2
                    </div>
                    <form action="">
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
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.btn-buy{
    background-color: #F15B5D;
    color: white;
    padding: 10px;
    border-radius: 10px;
    width: 200px;
    border: none;
    height: 50px;
}

.input-data{
    width: 200px;
    margin-bottom: 10px;
    border-radius: 10px;
    height: 50px;
}

:disabled{
    background-color: #f2999a;
}

</style>