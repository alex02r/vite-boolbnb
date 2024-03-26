<!-- SEZIONE JS SCRIPT -->
<script>

import Searchbar from '../components/Searchbar.vue';

export default {
    name: 'Home',
    components: {
        Searchbar
    }
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <div class="container-fluid jumbo">
        <div class="row justify-content-center">
        </div>
    </div>
    <hr>
    <div class="container my-5"> 
        <div class="row"> 
            <Searchbar />
            <div class="col-6 mt-5 align-self-center mb-4">
                <h3>Appartamenti</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda adipisci quibusdam aliquam, asperiores maiores, nobis, harum ad nesciunt perferendis beatae exercitationem molestias odio et quos nam fugit corporis voluptatum esse.</p>
            </div>
            <div class="col-6 mb-4">
                <a href="#" class="text-decoration-none"><img src="../../public/airbnb-img.jpg" alt="logo" width="600px"></a>
            </div>
            <div class="col-6 float-start mb-5">
                <a href="#" class="text-decoration-none"><img src="../../public/airbnb-uomo.jpg" alt="logo" width="600px"></a>
            </div>
            <div class="col-6 align-self-center ps-5 mb-5">
                <h3>Contattaci</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim debitis natus recusandae quasi beatae aliquid totam consectetur ipsa consequatur, quos id, dolorem suscipit alias corrupti molestias sunt accusamus laboriosam!</p>
            </div>
        </div>
    </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.jumbo {
    background-image: url('../../public/airbnb-home.png');
    background-size: cover;
    background-position: center;
    height: 700px;

    .home-title {
        position: absolute;
        top: 230px;
        left: 640px;
        border: 5px solid #6C63FF;
        border-radius: 20px;
    }
}

hr {
    color: #dd0b04;
    border: 5px solid;
    width: 100%;
}

img{
    border-radius: 10px;
}
</style>