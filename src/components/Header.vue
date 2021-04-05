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

            <div id="ghost-navs">
                <p class="">Sign up</p>
                <p class="">Sign in</p>
                <p class="">About</p>
                <p class="">Services</p>
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
        height: 70px;
    }

    #container {
        display: grid;
        grid-template-columns: 1fr 1fr;     
        align-items: center;
    }

    #logo {
        font-size: 35px;
    }

    #ghost-navs {
        color: black;
        display: none;
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

    @media screen and (max-width: 450px) {
        #navs {
            display: none;
        }
    }

</style>
