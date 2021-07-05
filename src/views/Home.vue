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
      <div class="division" id="side-nav">
        <div id="contact">
          <ActiveConvo v-for="user in OnlineUsers" 
            v-bind:key="user.userId" 
            v-bind:username="user.user" />
        </div>
      </div>
      <div class="division" id="msg-portal">
        <div id="msg-cont-wrapper" ref="msg-container">
          <Message
            v-bind:message="'This is a very long long long long long long logn long long long long long long long long long long long long long long long long long long message'"
            v-bind:messageType="'my-message'"
          />
          <Message
            v-bind:message="'yeah surely its to long!'"
            v-bind:messageType="'incoming-message'"
          />
          <Message
            v-bind:message="'This is a very long long long long long long logn long long long long long long long long long long long long long long long long long long message'"
            v-bind:messageType="'incoming-message'"
          />
          <Message
            v-bind:message="'yeah surely its to long!'"
            v-bind:messageType="'my-message'"
          />
        </div>
        <div id="text-msg-cont">
          <InputField
            type="textarea"
            name="text-message"
            placeholder="text message . . ."
            v-bind:className="['input-field-mod']"
            ref="text-message"
            v-on:input="getInput"
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
            <button class="button" id="send" v-on:click="sendMsg">
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
import socket from "../plugins/socketio-client";
import Message from "../components/Message";
import ActiveConvo from "../components/ActiveConvo";
import { mapMutations, mapGetters } from "vuex";
import Vue from "vue";

export default {
  name: "Home",
  components: {
    Header,
    InputField,
    Message,
    ActiveConvo
  },
  data() {
    return {
      showSideBar: false,
      msg: "",
    };
  },
  methods: {
    ...mapMutations({
      setOnlineUsers: "UserModule/setOnlineUsers"
    }),

    toogleSideNav() {
      this.showSideBar = !this.showSideBar;
    },

    getInput(data) {
      this.msg = data.data;
    },

    appendMessage(message, type) {
      let Msg = Vue.extend(Message);
      let Msgs = new Msg({
        propsData: { message: message, messageType: type },
      });
      Msgs.$mount();
      this.$refs["msg-container"].scrollTop = 100;
      this.$refs["msg-container"].appendChild(Msgs.$el);
      let childNum = this.$refs["msg-container"].children.length;
      let contHeight = this.$refs["msg-container"].offsetHeight;
      this.$refs["msg-container"].scrollTop = childNum * contHeight;
    },

    recieveMsg(data) {
      // let Msg = Vue.extend(Message);
      // let Msgs = new Msg({
      //   propsData: { message: data, messageType: "incoming-message" },
      // });
      // Msgs.$mount();
      // this.$refs["msg-container"].scrollTop = 100;
      // this.$refs["msg-container"].appendChild(Msgs.$el);
      // let childNum = this.$refs["msg-container"].children.length;
      // let contHeight = this.$refs["msg-container"].offsetHeight;
      // this.$refs["msg-container"].scrollTop = childNum * contHeight;
      this.appendMessage(data, "incoming-message");
    },

    sendMsg() {
      socket.addEventEmitter({ type: "message", data: this.msg });
      this.appendMessage(this.msg, "my-message");
      // Clear the message
      this.$refs["text-message"].data = "";
      this.msg = "";
    },

    // Show the pop-up error
    showPopup(data) {
      console.log(data);
    },

    connectSocket() {
      socket.initializedSocket();
    },
  },
  computed: {
    ...mapGetters({
      OnlineUsers: "UserModule/getOnlineUsers"
    })
  },

  created() {},
  mounted() {
    this.connectSocket();
    socket.addEventListener({ type: "message", callback: this.recieveMsg });
    socket.addEventListener({ type: "active-users", callback: this.setOnlineUsers });
    socket.addEventListener({ type: "connect_error", callback: this.showPopup })
  },
};
</script>

<style scoped>
#contact {
  margin-top: 58px;
  padding-top: 4px;
  height: 100%;
  background-color: #f2edd7;
  border-radius: 4px;
}

#msg-portal {
  position: relative;
  height: calc(100% - 170px);
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
  background-color: white !important;
  position: fixed;
  width: 100vw;
  height: 100vh;
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
  width: 100%;
  background-color: white !important;
  box-shadow: 0px 0px 3px #e6e3e3;
  /* border-radius: 10px;
  margin-top: 5px; */
}

#side-nav {
  /* background-color: #f2edd7; */
  background-color: white;
  /* border-right: rgb(187, 178, 178) solid 1px; */
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

#msg-cont-wrapper {
  position: absolute;
  /* top: 50px; */
  width: 99.68%;
  height: calc(100% - 64px);
  padding-top: 4em;
  background-color: white;
  overflow: auto;
}

#msg-cont-wrapper::-webkit-scrollbar {
  display: none;
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
