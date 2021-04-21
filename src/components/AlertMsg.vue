<template>
  <div id="alert-cont" v-bind:style="customStyle">
    <div v-bind:class="['alert-msg-cont', iconName]" id="cont-wrapper">
      <div v-bind:class="['alert-icon-cont', iconName]" id="back-border"></div>
      <div class="alert-msg-cont" id="alert-inner-wrapper">
        <div class="alert-icon-cont">
          <img id="alert" v-bind:src="imgPath" />
        </div>
        <div id="alert-content-wrapper">
          <div id="alert-content">
            <h2>{{title}}</h2>
            {{message}}
          </div>
        </div>
        <div id="alert-btn-cont">
          <button v-show="ok" class="alert-btn success" v-on:click="buttonClicked('ok')" id="ok">ok</button>
          <button v-show="cancel" class="alert-btn danger" v-on:click="buttonClicked('cancel')" id="cancel">cancel</button>
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
    ok: {type: Boolean, default: true},
    cancel: {type: Boolean, default: true},
  },
  data() {
    return {
    };
  },
  methods: {
    buttonClicked(buttonName) {
      this.$emit('buttonClick', {name: buttonName});
    }
  },
  computed: {
    imgPath() {
      return require(`../assets/icons/${this.iconName}.png`); 
    }
  }
};
</script>

<style scoped>
#ok:hover {
  background-color: #2d922d;
}

#cancel:hover {
  background-color: #ff0e0e;
}

#alert-content {
  text-align: center;
  margin-top: 26px;
}

.alert-btn {
  width: 5em;
  height: 5em;
  border-radius: 5em;
  background: #8d4103;
  border: none;
  font-weight: 600;
  color: rgb(242, 237, 215);
  margin: 0px 6px;
  cursor: pointer;
  outline: none;
}

#alert-btn-cont {
  position: absolute;
  width: 88%;
  display: flex;
  justify-content: center;
  bottom: 3em;
}

#alert-content-wrapper {
  margin-top: 20px;
  height: 100%;
  display: grid;
  justify-items: center;
  color: #8d4103;
}

.info {
  border: solid 4px #51b1de !important;
}

.danger {
  border: solid #ff0e0e 4px !important;
}

.warning {
  border: solid 4px orange !important;
}

.success {
  border: solid #2d922d 4px !important;
}

#cont-wrapper {
  padding: 0px;
  width: 328px;
  height: 328px;
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
  display: none;
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
