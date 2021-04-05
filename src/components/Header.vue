<template>
    <div id="header">
        <p id="logo">Let's Talk</p>
        <div id="navs">
            <span class="nav-item">Sign up</span>
            <span class="nav-item">Sign in</span>
            <span class="nav-item">Services</span>
            <span class="nav-item">About</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
    #header {
        background-color: #755139;
        align-items: center;
        position: fixed;
        width:100%;
        height: 70px;
        padding: 0px 10px;
        color: #F2EDD7;
        font-weight: 600;
        box-shadow: 0px 3px 15px gray;
    }

    #logo {
        width: 40%;
        float: left;
        margin-top: 20px;
        font-weight: bold;
        font-size: 1.5em !important;
    }

    .nav-item {
        float: right;
        padding-top: 25px;
        margin-right: 25px;
        cursor: pointer;
    }
    
    #navs {
        width: 50%;
        float: right;
    }
</style>