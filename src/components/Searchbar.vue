<script setup>


</script>

<template>

    <div class="search-container">
        <input type="search" id="search" name="search" placeholder="Cerca..." class="form-control searchbar">
        <button type="submit" onclick="" class="btn-searchbar">Cerca</button>
    </div>

</template>

<style scoped>

    .search-container {
        width: 600px;
        margin: 0 auto;
        text-align: center;
        display: flex;
    }

    .searchbar {
        width: 70%;
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
        border: 1px solid #ccc;
        height: 50px;
    }

    .btn-searchbar {
        padding: 10px 20px;
        margin: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        height: 50px;
    }

    

</style>
