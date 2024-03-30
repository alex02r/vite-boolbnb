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
        }
    },
}
</script>
<template lang="">
    <div>
        {{ apartment }}
    </div>

    <!-- FORM CONTATTO -->
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8">
                <AppMessageForm />
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>