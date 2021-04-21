<template>
  <div id="alert-cont">
    <div class="alert-msg-cont" id="cont-wrapper">
      <div class="alert-icon-cont" id="back-border"></div>
      <div class="alert-msg-cont" id="alert-inner-wrapper">
        <div class="alert-icon-cont">
          <img id="alert" src="@/assets/icons/success.png" />
        </div>
        <div id="alert-content">This is alert</div>
        <div id="alert-btn-cont">
          <button>ok</button>
          <button>cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    message: { type: String, default: "" },
    title: { type: String, default: "" },
    iconName: { type: String, default: "" },
    customStyle: { type: Object, default: null },
    customClass: { type: Object, default: null },
    buttons: {
      type: Object,
      default() {
        return { showAll: false, ok: true, cancel: false };
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
#alert-inner-wrapper {
}

.info {
  border: solid 4px #51b1de;
}

.danger {
  border: solid #ff0e0e 4px;
}

.warning {
  border: solid 4px orange;
}

.success {
  border: solid #2d922d 4px;
}

#cont-wrapper {
  padding: 0px;
  width: 328px;
  height: 328px;
  border: solid #2d922d 4px;
}

#alert {
  width: 75px;
  height: 75px;
}

#alert-cont {
  position: fixed;
  z-index: 5;
  border: solid #2d922d 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(242, 237, 215, 0.7);
  display: grid;
  justify-items: center;
  align-items: center;
  animation: fadeIn 0.5s 1;
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
  border: solid 4px #2d922d;
  transform: translate(-50%, -249%);
  /* padding: 0px; */
  width: 80px;
  height: 76.5px;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Media Queries */
@media screen and (max-width: 330px) {
  #cont-wrapper {
    width: 305px !important;
  }

  #alert-inner-wrapper {
    position: absolute;
    width: 87%;
  }

  .alert-msg-cont {
    width: 100%;
  }
}
</style>
