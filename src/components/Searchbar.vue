<script>
    export default{
        data() {
            return {
                value_search: ' '
            }
        },
    }
</script>

<template>

    <div class="search-container">
        <input type="search" id="search" name="search" placeholder="Cerca..." v-model="value_search" class="form-control searchbar">
        <router-link :to="{ name: 'search-apartments', params: { address: value_search } }" class="nav-link btn-searchbar">
            Cerca
        </router-link>
    </div>

</template>
<style scoped>

    .search-container {
        max-width: 600px;
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
