<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppMessageForm',
    props: {
        apartmentId: Number
    },

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
        sendForm() {
            this.loading = true;

            const data = {
                user_mail: this.user_mail,
                message: this.message,
                apartment_id: this.apartmentId,
            }

            // DEFINISCO UN OGGETTO CONTENTE I MESSAGGI DI ERRORE
            this.errors = {};

            console.log(data);

            axios.post(`${this.store.baseUrl}/api/message`, data).then((response) => {
                // Condizione che mi permette di resettare i campi inseriti dopo l'invio del modulo
                console.log(response);
                if (response.data.success) {
                    // this.apartment_id = '',
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
    <div class="row" v-if="success">
        <div class="col-12">
            <div class="alert alert-success fw-bold"><i class="fa-solid fa-check-double"></i> Messaggio inviato con successo</div>
        </div>
    </div>
    <form method="post" @submit.prevent="sendForm()">
        <div class="row">
            <div class="mb-3">
                <input type="email" name="user_mail" class="form-control" id="user_mail" placeholder="La tua mail *" required v-model="user_mail" :class="errors.user_mail ? 'is-invalid' : ''">
                 <p v-for="(error, index) in errors.user_mail" :key="`message-error-${index}`" class="text-danger"> {{ error }}</p>
            </div>
            <div class="mb-3">
                <textarea name="message" class="form-control" id="message" rows="5" placeholder="Messaggio *" required v-model="message" :class="errors.message ? 'is-invalid' : ''"></textarea>
                 <p v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="text-danger"> {{ error }}</p>
            </div>
             <div>
                <p>Tutti i campi con (*) sono obbligatori.</p>
            </div>
            <div class="d-flex justify-content-center mt-4 mb-5">
                <button type="submit" class="btn btn-form-message px-5 fs-5" @click.prevent="sendForm()" :disabled="loading"><i class="fa-solid fa-hand-point-right"></i> {{loading ? 'Invio in corso...' : 'Invia' }}</button>
            </div>
        </div>
    </form>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.link {
    text-decoration: none;
}

.btn-form-message{
    background-color: #F15B5D;
    color: white;
    transition: 0.5s;

    &:hover{
        border: 2px solid #F15B5D;
    }
}
</style>