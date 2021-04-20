<template>
  <div id="alert-cont">
    <div class="alert-msg-cont" id="cont-wrapper">
      <div class="alert-icon-cont" id="back-border"></div>
      <div class="alert-msg-cont">
        <div class="alert-icon-cont">
          <img class="alert" src="@/assets/icons/exclamation.png" />
        </div>
        <div>This is alert</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
};
</script>

<style scoped>
#cont-wrapper {
  padding: 0px;
  width: 328px;
  height: 328px;
  border: solid green 4px;
}

.alert {
  width: 75px;
  height: 75px;
}

#alert-cont {
  position: fixed;
  z-index: 5;
  border: solid green 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(242, 237, 215, 0.7);
  display: grid;
  justify-items: center;
  align-items: center;
}

.alert-msg-cont {
  padding: 20px;
  width: 18em;
  height: 18em;
  background-color: rgb(242, 237, 215);
  position: relative;
}

.alert-icon-cont {
  border: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -271%);
  width: 75px;
  height: 75px;
  border-radius: 100%;
  background: #fff;
}

#back-border {
  background-color: rgb(242, 237, 215);
  border: solid 4px green;
  transform: translate(-50%, -249%);
  /* padding: 0px; */
  width: 80px;
  height: 76.5px;
}
</style>
