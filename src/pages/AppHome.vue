<!-- SEZIONE JS SCRIPT -->
<script>
export default {
    name: 'Home',
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <div>
        <div class="container-fluid jumbo">
            <div class="row justify-content-center">
                <div class="col-4 home-title text-center py-3">
                    <h1 class="fw-bold">Boolfolio</h1>
                    <h4 class="fst-italic">Il tuo gestionale preferito made Boolean!</h4>
                </div>
            </div>
        </div>
        <hr>
        <div class="container my-5"> 
            <div class="row"> 
                <div class="col-6 mt-5 align-self-center mb-4">
                    <h3>Scopi i nostri progetti</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda adipisci quibusdam aliquam, asperiores maiores, nobis, harum ad nesciunt perferendis beatae exercitationem molestias odio et quos nam fugit corporis voluptatum esse.</p>
                </div>
                <div class="col-6 mb-4">
                    <a href="http://localhost:5174/blog" class="text-decoration-none"><img src="../../public/projects.png" alt="logo" width="700px"></a>
                </div>
                <div class="col-6 float-start mb-5">
                    <a href="http://localhost:5174/contacts" class="text-decoration-none"><img src="../../public/contacts.png" alt="logo" width="700px"></a>
                </div>
                <div class="col-6 align-self-center ps-5 mb-5">
                    <h3>Contattaci</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim debitis natus recusandae quasi beatae aliquid totam consectetur ipsa consequatur, quos id, dolorem suscipit alias corrupti molestias sunt accusamus laboriosam!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/generals.scss' as *;

.jumbo {
    background-image: url('../../public/website-jumbo.png');
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

h1 {
    color: #6C63FF;
}

hr {
    color: #00c1d4;
    border: 5px solid;
    width: 100%;
}
</style>