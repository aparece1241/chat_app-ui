<template>
  <div id="wrapper">
    <Header />
    <div id="container">
      <div class="division" id="division-1">
          <h1 class="head-name">Connecting People</h1>
          <p class="sub-head-name">Connecting People Around the World Through Messages</p>
      </div>
      <div class="division" id="division-2">
        <img src="@/assets/img/img-display.png" alt="">
      </div>
    </div>
    <div id="contents">
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
#container {
  margin-top: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: 100vh;
}

.division {
  width: 100%;
  text-align: center;
}

#division-1 {
  text-align: justify;
}

#division-2 {
}

@media screen and (min-width: 1444px) {
  #container {
    justify-self: center;
    width: 1444px;
  }
}
</style>