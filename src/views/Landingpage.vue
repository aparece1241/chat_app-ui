<template>
    <div id="container">
        <Header />
        This the landing page
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
    }
</style>