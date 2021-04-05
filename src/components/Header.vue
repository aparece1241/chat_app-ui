<template>
    <div id="header">
        <div id="container">
            <div id="logo">
                <span id="logo-text">Let's Talk</span>
            </div>
            <div id="navs">
                <span class="nav-item">Sign up</span>
                <span class="nav-item">Sign in</span>
                <span class="nav-item">About</span>
                <span class="nav-item">Services</span>
            </div>
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
        position: fixed;
        width: 100%;
        width: -webkit-fill-available;
        width: -moz-fill-available;
        width: -o-fill-available;
        width: -ms-fill-available;
        width: fill-available;
        padding: 0px 20px;
        display: grid;
        color: #F2EDD7;
        background-color: #755139;   
        font-weight: 600;
        box-shadow: 0px 2px 5px gray;
    }

    #container {
        display: grid;
        grid-template-columns: 1fr 1fr;     
        align-items: center;
    }

    /* #navs {
        pass
    } */

    #logo {
        font-size: 35px;
    }

    .nav-item {
        float: right;
        margin-left: 25px;
        cursor: pointer;
    }

    @media screen and (min-width: 1024px) {
        #container {
            justify-self: center;
            width: 1444px;
        }
    }
</style>