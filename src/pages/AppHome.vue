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
            <h1 class="logo fw-bold pt-3 home-title">BoolBnB</h1>
        </div>
    </div>
    <div class="container my-5"> 
        <div class="row justify-content-center">
            <div class="col-12 mb-5 align-self-center">
                <p><Searchbar /></p>
            </div>
            <div class="col-lg-6 col-12 mt-5 align-self-center mb-4">
                <a href="#" class="text-decoration-none"><h3>Appartamenti</h3></a> 
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda adipisci quibusdam aliquam, asperiores maiores, nobis, harum ad nesciunt perferendis beatae exercitationem molestias odio et quos nam fugit corporis voluptatum esse.</p>
            </div>
            <div class="col-lg-6 col-12 mb-4">
                <a href="#" class="text-decoration-none"><img src="../../public/airbnb-img.jpg" alt="logo" width="600px"></a>
            </div>
            <div class="col-lg-6 col-12 float-lg-start mb-5">
                <a href="#" class="text-decoration-none"><img src="../../public/airbnb-uomo.jpg" alt="logo" width="600px"></a>
            </div>
            <div class="col-lg-6 col-12 align-self-center ps-lg-5 mb-lg-5">
                <a href="#" class="text-decoration-none"><h3>Contattaci</h3></a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim debitis natus recusandae quasi beatae aliquid totam consectetur ipsa consequatur, quos id, dolorem suscipit alias corrupti molestias sunt accusamus laboriosam!</p>
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

h3{
    color: #F15B5D;;
}

img{
    border-radius: 10px;
}
</style>