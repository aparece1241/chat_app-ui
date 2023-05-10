<template>
  <div class="home">
    <Header />
    <div id="sub-header">
      <div class="container" id="content-sub-header">
        <span id="expand-bar" v-on:click="toogleSideNav"
          ><i class="fa fa-indent" aria-hidden="true"></i
        ></span>
        <span id="convo-title">{{ conversation_name ? conversation_name : "New Conversation" }}</span>
      </div>
    </div>
    <div class="container" id="content">
      <div class="division" id="side-nav">
        <div id="contact">
          <ConvoUtils title="New Message" icon="fa fa-plus" v-on:click.native="showModal"/>
          <ConvoUtils title="Message Request" icon="fa fa-ellipsis-h" />
          <ActiveConvo v-for="(user, index) in contact_list"
            v-bind:key="user.userId" 
            v-bind:username="user.username"
            v-on:click.native="switchConvo(index)"
          />
        </div>
      </div>
      <div class="division no-contact-cont" v-show="!conversations.length">
        <div class="no-contact-view">
          <h3>Start your day with a chat!!!</h3>
          <h5>Find your first chat mate...</h5>
          <h6>Click new chat or click here to start.</h6>
          <button class="new-chat-btn" v-on:click="showModal">New Chat</button>
        </div>
      </div>
      <div class="division" v-show="conversations.length" id="msg-portal">
        <div id="msg-cont-wrapper" ref="msg-container">
          <Message
            v-show="!messages.length"
            v-bind:message="'Say Hello !!!'"
            v-bind:messageType="'my-message'"
          />

          <Message
            v-for="(message, index) in messages"
            v-bind:key="index"
            v-bind:message="message.message"
            v-bind:messageType="message.author === user._id ? 'my-message' : 'incoming-message'"
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
      <ConvoUtils title="New Message" icon="fa fa-plus" v-on:click.native="showModal" />
      <ConvoUtils title="Message Request" icon="fa fa-ellipsis-h" />
      <ActiveConvo v-for="(user, index) in contact_list"
        v-bind:key="user.userId"
        v-bind:username="user.username"
        v-on:click.native="switchConvo(index)"
      />
    </div>

    <!-- // modals // -->
    <div class="modal" v-show="showModal1">
      <div class="modal-content">
        <div class="search-user-cont">
          <span class="close" v-on:click="closeModal">&times;</span>
          <InputField
            name="SearchUser"
            class="search-user"
            :placeholder="'Direct Message'"
          />
        </div>
        <div class="user-list">
          <ActiveConvo v-for="(user, index) in users" v-bind:key="index" v-bind:username="user.username" icon="fa fa-comments" v-on:click.native="startConvo(user)" />
        </div>
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
import ConvoUtils from "../components/ConvoUtils";
import { mapGetters, mapActions } from "vuex";
import apiHelper from '../helper/apiHelper';

export default {
  name: "Home",
  components: {
    Header,
    Message,
    ConvoUtils,
    InputField,
    ActiveConvo,
  },
  data() {
    return {
      showSideBar: false,
      msg: "",
      showModal1: false,
      conversations: [],
      contact_list: [],
      selected_conversation: {},
      conversation_name: "",
      messages: [],
      conversation_index: 0,
      to_save_convo: {}
    };
  },
  methods: {
    ...mapActions({
      requestAllUsers: "UserModule/requestAllUsers",
      requestUser: "UserModule/requestUser"
    }),

    toogleSideNav() {
      this.showSideBar = !this.showSideBar;
    },

    getInput(data) {
      this.msg = data.data;
    },

    scrollUp() {
      this.$refs["msg-container"].scrollTop = 100;
      let childNum = this.$refs["msg-container"].children.length;
      let contHeight = this.$refs["msg-container"].offsetHeight;
      this.$refs["msg-container"].scrollTop = childNum * contHeight;
    },

    async recieveMsg() {
      await setTimeout(async () => {
        await this.requestUser(this.authUser._id);
        this.prepareConversation();
        this.prepareMessages();
      }, 200);
    },

    async sendMsg() {
      socket.addEventEmitter({ type: "message", data: this.msg });
      // this.appendMessage(this.msg, "my-message");
      
      // Clear the message
      this.$refs["text-message"].data = "";
      
      // save message
      let d = {
        message: this.msg,
        author: this.user._id
      };

      let response = await apiHelper.apiRequest('/message', "POST", d);
      this.msg = "";
      
      
      // save conversation
      if (!this.selected_conversation._id) {
        this.selected_conversation.messages.push(response.data._id);
        await this.saveConversation();
      } else {
        let d = {
          messages: [response.data._id, ...this.selected_conversation.messages.map(message => message._id)]
        }
        this.updateConversation(d);
        this.to_save_convo = {};
      }
    },

    // Show the pop-up error
    showPopup(data) {
      console.log(data);
    },

    connectSocket() {
      socket.initializedSocket();
    },

    closeModal() {
      this.showModal1 = false;
    },

    showModal() {
      this.showModal1 = true;
    },

    switchConvo(index) {
      this.conversation_index = index;
      this.prepareConversation();
      this.prepareMessages();
      this.toogleSideNav();
    },

    startConvo(user) {
      this.to_save_convo = {
        conversation_name: `${this.user.username}, ${user.username}`,
        is_accepted_both: false,
        members: [this.user._id, user._id],
        messages: [],
      }

      this.selected_conversation = this.to_save_convo;
      this.contact_list.push(user);
      this.conversations.push(this.to_save_convo);
      this.toogleSideNav();
      this.conversation_index = this.conversations.length - 1;
      this.showModal1 = false;

      this.prepareConversation();
      this.prepareMessages();
    },
    
    prepareContactList() {
      this.conversations.forEach(convo => {
        convo.members.forEach(member => {
          if (member._id != this.user._id) {
            this.contact_list.push(member);
          }
        });
      });
    },

    prepareMessages() {
      this.messages = [...this.selected_conversation.messages];
      this.messages = this.messages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

      setTimeout(() => {
        this.scrollUp();
      }, 200);
    },

    prepareConversation() {
      this.conversations = this.user.conversations;
      
      if (Object.keys(this.to_save_convo).length) {
        this.conversations.push(this.to_save_convo);
      }

      this.selected_conversation = this.conversations[this.conversation_index];
      this.conversation_name = this.selected_conversation.conversation_name;
    },

    async saveConversation() {
      await apiHelper.apiRequest('/conversation', "POST", this.selected_conversation);
      await this.requestUser(this.authUser._id);
      this.prepareConversation();
      this.prepareMessages();
    },

    async updateConversation(data) {
      await apiHelper.apiRequest(`/conversation/${this.selected_conversation?._id}`, "PATCH", data);
      await this.requestUser(this.authUser._id);
      this.prepareConversation();
      this.prepareMessages();
    }
  },

  computed: {
    ...mapGetters({
      OnlineUsers: "UserModule/getOnlineUsers",
      user: "UserModule/getUser",
      users: "UserModule/getAllUsers",
      authUser: "AuthModule/getAuthUser",
    })
  },

  created() {},
  mounted() {
    this.requestAllUsers();
    this.connectSocket();

    // for socket events
    socket.addEventListener({ type: "message", callback: this.recieveMsg });
    // socket.addEventListener({ type: "connect_error", callback: this.showPopup });

    // request user every mounted
    if (this.authUser._id) {
      this.requestUser(this.authUser._id);
    }

    // initialized conversation
    if (this.user.conversations.length) {
      // prepare conversation
      this.prepareConversation();
      // prepare contact list
      this.prepareContactList();
      // prepare messages
      this.prepareMessages();
    }
  },
};
</script>

<style scoped>
.new-chat-btn {
  border: none;
  background: floralwhite;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px #9f9595;
  cursor: pointer;
}
.no-contact-cont {
  position: relative;
  margin-top: 58px;
  display: grid;
  justify-items: center;
  align-items: center;
}
.no-contact-view {
  position: absolute;
  text-align: center;
  box-shadow: 0px 0px 20px #e6e3e3;
  padding: 10px;
  border-radius: 10px;
}
.close {
  position: absolute;
  right: 0;
  padding: 7px 11px;
  border-radius: 19px;
  cursor: pointer;
  background: #9dabab;
}
.user-list {
  margin: 0px 35px;
  max-height: 380px;
  height: 100%;
  padding: 5px;
  margin-top: -70px;
  border-radius: 15px;
  box-shadow: 0px 0px 8px gray;
}
.search-user-cont {
  justify-content: center;
  grid-template-rows: 0.2fr 1fr;
  display: grid !important;
}
.search-user {
  box-shadow: 0px 0px 8px gray;
  margin: 18px 0px;
  border-radius: 10px;
}
.modal-content {
  position: absolute;
  /* border: solid; */
  display: block;
  left: 50%;
  right: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  top: 50%;
  z-index: 5;
  height: 500px;
  box-shadow: 0px 0px 3px #e6e3e3;
  border-radius: 15px;
  background-color: white;
}

.modal {
  /* display: none; */
  z-index: 5;
  width: 100vw;
  height: 100vh;
  position: relative;
  top: calc(-70px - 100vh);
  background-color: rgba(0,0,0,0.5);
}

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
  bottom: 2px;
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
  left: 0;
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

.d-none {
  display: none;
}

/* Keyframes */
@keyframes slide {
  0% {
    left: -123px;
  }
  100% {
    left: 0;
  }
}

/* Media queries */
/* @media screen and (min-width: 1444px) {
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
} */

@media screen and (min-width: 1100px) {
  #ghost-side-nav {
    display: none;
  }
}

@media screen and (max-width: 1100px) {
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
