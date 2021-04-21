<template>
  <div id="loader-cont">
    <div id="loader-box">
        <div id="loader-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
#loader-cont {
  /* display: none; */
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
    animation: moving 2s infinite;
}

/* Keyframes */
@keyframes moving  {
    0% {margin-left: 0%}
}
</style>