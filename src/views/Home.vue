<template>
  <div class="home">
    <Header />
    <div id="sub-header">
      <div class="container" id="content-sub-header">
        <span id="expand-bar" v-on:click="toogleSideNav"
          ><i class="fa fa-indent" aria-hidden="true"></i
        ></span>
        <span id="convo-title">Conversation Name</span>
      </div>
    </div>
    <div class="container" id="content">
      <div class="division" id="side-nav"></div>
      <div class="division" id="message-area">
        <div id="text-msg-cont">
          <InputField
            type="textarea"
            name="text-message"
            placeholder="text message . . ."
            v-bind:className="['input-field-mod']"
            v-bind:inputClass="{
              'background-color': '#f5f4ef',
              'font-size': '1em',
              'font-family': 'Avenir, Helvetica, Arial, sans-serif',
              'max-height': '60%',
              padding: '10px',
              resize: 'none',
              width: '100%',
            }"
          />
          <div class="icon-btn-cont">
            <button class="button" id="emoji">
              <span><i class="fa fa-smile-o" aria-hidden="true"></i></span>
            </button>
            <button class="button" id="send">
              <span
                ><i class="fa fa-paper-plane-o" aria-hidden="true"></i
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="ghost-side-nav" v-show="showSideBar">
      <div id="convo-cont">
        <span id="return-arrow" v-on:click="toogleSideNav"
          ><i class="fa fa-arrow-left" aria-hidden="true"></i
        ></span>
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
  data() {
    return {
      showSideBar: false,
    };
  },
  methods: {
    toogleSideNav() {
      this.showSideBar = !this.showSideBar;
    },
  },
};
</script>

<style scoped>
#message-area {
  background-color: white;
}

.button {
  background-color: #f5f4ef;
  border: none;
  font-size: 1.4em;
  color: #755139;
  cursor: pointer;
  outline: none;
  width: 40px;
  height: 40px;
  transition: background-color 0.5s;
}

.button:hover {
  background-color: #755139 !important;
  color: #f5f4ef !important;
  border-radius: 5px;
}

.home {
  display: grid;
  justify-items: center;
  background-color: #9e9aa3 !important;
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
  width: 100%;
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
  width: 81.4%;
  display: grid;
  grid-template-columns: 2fr 0.5fr;
  justify-items: center;
  align-items: center;
  border-radius: 10px;
  background-color: #f5f4ef;
  margin-left: 5px;
}

.input-field-mod {
  background-color: #f5f4ef;
  width: 100%;
  height: 98%;
  display: flex;
  justify-content: left;
  align-items: center;
}

#expand-bar {
  padding: 18px;
  border-right: solid 1px rgb(187, 178, 178);
  color: #755139;
  cursor: pointer;
  display: none;
}

#expand-bar:hover {
  color: #f5f4ef;
  background-color: #755139;
}

#ghost-side-nav {
  position: fixed;
  margin-top: 70.5px;
  border-right: 1px solid rgb(187, 178, 178);
  /* border: solid 1px blue; */
  width: 15em;
  z-index: 1;
  height: 100%;
  background-color: #f2edd7;
  animation: slide 0.5s 1;
}

#convo-cont {
  border-bottom: solid 1px rgb(187, 178, 178);
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
  width: 100%;
}

#return-arrow {
  padding: 18px 19px;
  border-left: solid 1px rgb(187, 178, 178);
  color: #755139;
  cursor: pointer;
}

#return-arrow:hover {
  color: #f2edd7;
  background-color: #755139;
}

/* Keyframes */
@keyframes slide {
  from {
    left: -123px;
  }
  to {
    left: 0px;
  }
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

  #text-msg-cont {
    width: 1173px;
  }
}

@media screen and (min-width: 900px) {
  #ghost-side-nav {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  #content {
    display: grid;
    grid-template-columns: 1fr;
  }

  #side-nav {
    display: none;
  }

  #expand-bar {
    display: block;
  }

  #text-msg-cont {
    width: 98.8%;
  }
}

@media screen and (max-width: 410px) {
  .icon-btn-cont {
    width: 88px;
  }

  #text-msg-cont {
    width: 97.8%;
  }
}
</style>
