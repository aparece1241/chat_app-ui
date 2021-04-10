<template>
  <div class="home">
    <Header />
    <div id="sub-header">
      <div class="container" id="content-sub-header">
        <span id="convo-title">Conversation Name</span>
      </div>
    </div>
    <div class="container" id="content">
      <div class="division" id="side-nav"></div>
      <div class="division">
        <div id="text-msg-cont">
          <InputField
            name="text-message"
            placeholder="text message . . ."
            v-bind:className="['input-field-mod']"
            v-bind:inputClass="{
              'background-color': '#f5f4ef',
              'font-size': '1em',
            }"
          />
          <div class="icon-btn-cont">
            <button class="button" id="send">
              <span
                ><i class="fa fa-paper-plane-o" aria-hidden="true"></i
              ></span>
            </button>
            <button class="button" id="emoji">
              <span><i class="fa fa-smile-o" aria-hidden="true"></i></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import InputField from "../components/InputField";

export default {
  name: "Home",
  components: {
    Header,
    InputField,
  },
};
</script>

<style scoped>
.home {
  display: grid;
  justify-items: center;
  background-color: white !important;
}

.container {
  display: grid;
}

#sub-header {
  display: grid;
  justify-items: center;
  height: 3.5em;
  top: 70px;
  position: fixed;
  width: 100vw;
  z-index: 1;
  margin-top: 0px !important;
}

#content {
  margin-top: 70px;
  width: 98vw;
  height: 100vh;
  grid-template-columns: 0.43fr 2fr;
}

#content-sub-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(187, 178, 178);
  border-top: 1px solid rgb(175, 171, 171);
  width: 100%;
}

#side-nav {
  background-color: #f2edd7;
  border-right: rgb(187, 178, 178) solid 1px;
}

#convo-title {
  padding-left: 15px;
}

#text-msg-cont {
  position: fixed;
  bottom: 0em;
  height: 95px;
  width: 82%;
  display: grid;
  grid-template-columns: 2fr 0.5fr;
  justify-items: center;
  align-items: center;
  border-radius: 10px;
  background-color: #f5f4ef;
}

.input-field-mod {
  background-color: #f5f4ef;
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: center;
}

/* Media queries */
@media screen and (min-width: 1444px) {
  .home {
    justify-items: center;
    align-items: center;
  }

  .container {
    width: 1444px !important;
  }

  #sub-header {
    width: 100%;
  }
}
</style>
