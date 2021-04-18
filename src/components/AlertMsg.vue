<template>
  <div id="alert-cont">
    <div id="alert-msg-cont">
      <span id="alert-icon-cont"
        ><i class="fa fa-exclamation-circle" aria-hidden="true"></i
      ></span>
      <span>This is alert</span>
    </div>
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

#alert-msg-cont {
  border: solid green 1px;
  padding: 20px;
  width: 18em;
  height: 18em;
  background-color: rgb(242, 237, 215);
  position: relative;
}

#alert-icon-cont {
  border: solid 1px saddlebrown;
  height: auto;
  padding: 0px 0.121em;
  font-size: 5.5em;
  border-radius: 51px;
  color: saddlebrown;
  position: absolute;
  top: -51px;
  left: 35%;
}
</style>