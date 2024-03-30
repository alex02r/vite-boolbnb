<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppMessageForm',

    data() {
        return {
            store,
            apartment_id: '',
            user_mail: '',
            message: '',
            loading: false,
            errors: '',
            success: false,
        }
    },
    methods: {
        sendForm(apartment_id) {
            this.loading = true;

            const data = {
                apartment_id: this.apartment_id,
                user_mail: this.user_mail,
                message: this.message,
            }

            // DEFINISCO UN OGGETTO CONTENTE I MESSAGGI DI ERRORE
            this.errors = {};

            axios.post(`${this.store.baseUrl}/api/message`, data).then((response) => {
                // Condizione che mi permette di resettare i campi inseriti dopo l'invio del modulo
                if (response.data.success) {
                    this.apartment_id = '',
                    this.user_mail = '';
                    this.message = '';

                    this.success = true;
                }
                else {
                    this.errors = response.data.errors;
                }

                this.loading = false;
            });
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <div class="container">
    <div class="row" v-if="success">
        <div class="col-12">
            <div class="alert alert-success fw-bold"><i class="fa-solid fa-check-double"></i> Messaggio inviato con successo</div>
        </div>
    </div>
    <form @submit.prevent="sendForm(apartment_id)" method="post">
        <div class="row">
            <div class="mb-3 col-6">
                <input type="text" name="apartment_id" class="form-control" id="apartment_id" placeholder="Id Appartamento" required v-model="apartment_id" :class="errors.apartment_id ? 'is-invalid' : ''">
                 <!-- <p v-for="(error, index) in errors.apartment_id" :key="`message-error-${index}`" class="text-danger"> {{ error }}</p> -->
            </div>
            <div class="mb-3 col-6">
                <input type="text" name="user_mail" class="form-control" id="user_mail" placeholder="La tua mail" required v-model="user_mail" :class="errors.user_mail ? 'is-invalid' : ''">
                 <p v-for="(error, index) in errors.user_mail" :key="`message-error-${index}`" class="text-danger"> {{ error }}</p>
            </div>
            <div class="mb-3">
                <textarea name="message" class="form-control" id="message" rows="5" placeholder="Messaggio" required v-model="message" :class="errors.message ? 'is-invalid' : ''"></textarea>
                 <p v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="text-danger"> {{ error }}</p>
            </div>
            <div class="d-flex justify-content-center mt-4 mb-5">
                <button type="submit" class="btn btn-info px-5 fs-5" :disabled="loading"><i class="fa-solid fa-hand-point-right"></i> {{loading ? 'Invio in corso...' : 'Invia' }}</button>
            </div>
        </div>
    </form>
  </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.link {
    text-decoration: none;
}
</style>