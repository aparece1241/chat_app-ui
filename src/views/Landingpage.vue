<template>
    <div id="wrapper">
    <Header />
        <div id="container">
            <span>This the landing page</span>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
    name : 'Landingpage',
    components: {
        Header
    }
}
</script>

<style scoped>
    #container {
        margin-top: 70px;
    }
</style>