<template>
  <div id="wrapper">
    <AlertMsg 
      v-bind:title="title" 
      v-bind:message="alertMessage" 
      v-bind:iconName="iconName"
      v-bind:customStyle="alertCustomStyle"
      v-bind:ok="buttons.ok"
      v-bind:cancel="buttons.cancel" />
    <div id="container">
      <div id="division-1" class="division">
        <div id="line-text">
          <img
            src="@/assets/img/chat-message.png"
            id="img-sign-in"
            alt="message-pic"
          />
          <p id="head-line">Start Connecting Now</p>
          <p id="sub-head-line">Haven't joined yet?</p>
          <router-link to="/sign-up"
            ><button class="button" id="join-now">Join now</button></router-link
          >
        </div>
      </div>
      <div id="division-2" class="division">
        <form method="post" v-on:submit.prevent="submitData"> 
          <p id="sign-in-text">Sign in</p>
          <InputField 
            name="username" 
            placeholder="Username" 
            v-bind:className="['input-field']" 
            ref="username" 
            v-on:input="checkInput"
            v-bind:errorMsg="fieldValidation.username.message"
            v-bind:containError="fieldValidation.username.valid"/>
          <InputField 
            name="password" 
            type="password" 
            placeholder="Password" 
            v-bind:className="['input-field']" 
            ref="password" 
            v-on:input="checkInput"
            v-bind:errorMsg="fieldValidation.password.message"
            v-bind:containError="fieldValidation.password.valid"/>
          <button class="button" id="sign-in">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "../components/InputField";
import FormValHelper from "../helper/formValHelper";
import ApiHelper from "../helper/apiHelper";
import AlertMsg from "../components/AlertMsg";

export default {
  name: "Signin",
  components: {
    InputField,
    AlertMsg
  },
  data() {
    return {
      username: "",
      password: "",
      alertMessage: "",
      iconName: "success",
      title: "",
      fieldValidation: {
        username: {
          valid: false,
          message: ''
        },
        password: {
          valid: false,
          message: ''
        }
      },
      isValidForm: false,
      alertCustomStyle: {},
      buttons: {ok: true, cancel: false}
    }
  },
  methods: {
    // Validation method
    checkInput(data) {
      let validationRules = {
        username: {length: 5},
        password: {length: 8}
      };

      let fieldName = data['eventName'];
      this[fieldName] = data['data'];
      this.fieldValidation[fieldName] = FormValHelper.checkLength(validationRules[fieldName].length, this[fieldName]);
      this.isValidForm = this.fieldValidation.username.valid && this.fieldValidation.password.valid;

    },

    async submitData() {
      let data = {
        username: this.username,
        password: this.password
      }

      if(!this.isValidForm) {
        for(let field of Object.values(this.fieldValidation)){
          field.message = field.valid ? '': field.message ? field.message : ' should not be empty!';
        }
        return;
      }

      let response = await ApiHelper('/user/login', 'POST', data);
      if(!response.error) {
        this.iconName = "success";
        this.title = "Login Successfully";
        this.alertMessage = '';
      }else {
        this.alertMessage = response.message;
        this.iconName = "danger";
        this.title = "Login Failed";
      }
      this.alertCustomStyle = {'display': 'grid'};
    }
  },
  mounted() {
    
  }
};
</script>

<style scoped>
.input-field {
  margin: 25px 0px;
}

#img-sign-in {
  height: 170px;
  width: 163px;
}
#sign-in {
  background-color: #755139;
  color: #f2edd7;
}

#sign-in:hover {
  opacity: 0.5;
  border: solid 1px #755139;
}

#sign-in-text {
  padding: 30px 0px;
  font-size: larger;
  font-weight: 750;
  color: #755139;
}

#sub-head-line {
  font-weight: 500;
  font-size: medium;
}

#head-line {
  margin: 0px;
  font-weight: 900;
  font-size: x-large;
}

#join-now {
  background-color: #f2edd7;
  color: #755139;
}

.button {
  border: none;
  width: 10em;
  height: 2.5em;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.8em;
  outline: #927059;
}

#join-now:hover {
  background-color: #927059;
  color: #f2edd7;
}

#wrapper {
  background: linear-gradient(to bottom right, #f2edd7, #927059);
  display: grid;
  justify-items: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
}

#container {
  width: 50em;
  height: 60%;
  box-shadow: 1px 0px 7px gray;
  background-color: #755139;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.division {
  text-align: center;
  display: grid;
  justify-items: center;
  align-items: center;
}

#division-1 {
  color: #f2edd7;
}

#division-2 {
  background-color: #f2edd7;
}

@media screen and (max-width: 900px) {
  #container {
    width: 40em;
  }
}

@media screen and (max-width: 600px) {
  #container {
    width: 98%;
  }
}

@media screen and (max-width: 550px) {
  #wrapper {
    position: relative;
    overflow: scroll;
  }

  .division {
    height: 500px;
    margin-bottom: 0px;
    /* border: tomato solid 1px; */
  }

  #container {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
}

@media screen and (min-height: 1000px) {
  #container {
    height: 550px;
  }
}

@media screen and (max-height: 700px) {
  #container {
    height: 92%;
  }
}
</style>
