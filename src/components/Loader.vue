<template>
  <div id="loader-cont" v-bind:style="customStyle">
    <div id="cont">
      <div id="loader-box">
        <div id="loader-content"></div>
      </div>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    message: {type: String, default: "Loading . . ."},
    customStyle: {type: Object, default() {return {}}}
  }
};
</script>

<style scoped>
#cont {
  text-align: center;
  color: #755139;
}

#loader-cont {
  background-color: rgba(242, 237, 215, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
}

#loader-box {
  border: solid 8px #755139;
  width: 16em;
  height: 1.5em;
  border-radius: 2em;
  position: relative;
}

#loader-content {
  background: #cc7509b8;
  width: 40%;
  height: 100%;
  border-radius: 1em;
  position: absolute;
  animation: moving 1.5s infinite;
}

/* Keyframes */
@keyframes moving {
  0% {
    margin-left: 0%;
  }
  50% {
    margin-left: 60%;
  }
  100% {
    margin-left: 0%;
  }
}
</style>