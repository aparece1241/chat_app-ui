<template>
  <div id="wrapper">
    <Header />
    <div id="cont">
      <div class="division" id="division-1">test</div>
      <div class="division" id="division-2">test</div>
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
  margin-top: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: cal(100vh - 70px);
  width: 100%;
}

.division {
  width: 100%;
  height: 100%;
  text-align: center;
  border: solid 1px green;
}

#division-1 {
  text-align: justify;
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