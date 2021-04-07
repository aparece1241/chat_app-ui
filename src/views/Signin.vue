<template>
    <div id="wrapper">
        <div id="container">
            <div id="divition-1" class="division"></div>
            <div id="divition-2" class="division"></div>
        </div>
    </div>    
</template>

<script>
export default {
    name: "Signin",
}
</script>

<style scoped>
    #wrapper {
        background-color: #f2edd7;
        display: grid;
        justify-items: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100%;
    }

    #container {
        width: 50%;
        height: 60%;
        box-shadow: 1px 0px 7px gray;
        background-color: #755139;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .division {
        border: springgreen solid 1px;
    }

    @media screen and (max-width: 900px) {
        #container {
            width: 85%;
        }
    }

    @media screen and (max-width: 600px) {
        #container {
            width: 98%;
        }
    }

    @media screen and (min-height: 1000px) {
        #container {
            height: 550px;
        }
    }

    @media screen and (max-height: 550px) {
        #container  {
            height: 96%;
        }
    }
</style>
