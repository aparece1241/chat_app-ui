<template>
  <div id="alert-cont">
    <div><span>This is alert</span></div>
  </div>
</template>

<script>
export default {
  name: "Alert",
};
</script>

<style scoped>
#alert-cont {
  position: fixed;
  z-index: 5;
  border: solid green 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(242, 237, 215, 0.7);
  /* opacity: 0.5; */
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  display: grid;
  justify-items: center;
  align-items: center;
}
</style>