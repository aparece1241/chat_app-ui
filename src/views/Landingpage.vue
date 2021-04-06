<template>
  <div id="wrapper">
    <Header />
    <div id="cont">
      <div class="division" id="division-1">
          <div id="test">
           <p>Connecting People</p>
          </div>
      </div>
      <div class="division" id="division-2">
         <img id="ft-picture-1"  src="@/assets/img/img-display.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "Landingpage",
  components: {
    Header,
  },
};
</script>

<style scoped>
#cont {
  margin-top: 55px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.division {
  text-align: center;
  border: solid 1px green;
}

#test {
    border: salmon solid 2px;
    margin: 2em;
    text-align: justify;
    width: 18em;
}

#ft-picture-1 {
    width: 20em;
    height: 23em;
}

#division-1 {
}

#division-2 {
}

@media screen and (min-width: 1444px) {
  #cont {
    width: 1444px;
  }

  #wrapper {
    display: grid;
    justify-items: center;
  }
}
</style>