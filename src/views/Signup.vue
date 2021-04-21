<template>
  <div id="wrapper">
    <AlertMsg
      v-bind:title="title"
      v-bind:message="alertMessage"
      v-bind:iconName="iconName"
      v-bind:customStyle="alertCustomStyle"
      v-bind:ok="buttons.ok"
      v-bind:cancel="buttons.cancel"
      v-on:buttonClick="alertBtnClicked"
    />
    <div id="container">
      <div id="division-1" class="division">
        <div class="msg-wrapper">
          <img src="@/assets/img/message-signup.png" id="img-sign-up" alt="" />
          <p id="text-saying">Comunication is what makes a team strong</p>
          <p id="sub-head">Already had an account?, Click sign in</p>
          <router-link to="/sign-in"
            ><button id="sign-in" class="button">Sign in</button></router-link
          >
        </div>
      </div>
      <div id="division-2" class="division">
        <form action="post" v-on:submit.prevent="submitData">
          <p id="text-sign-up">Sign up</p>
          <InputField
            name="first_name"
            placeholder="First Name"
            v-bind:className="['input-field']"
            ref="first_name"
            v-on:input="checkInput"
            v-bind:errorMsg="fieldValidation.first_name.message"
            v-bind:containError="fieldValidation.first_name.valid"
          />
          <InputField
            name="last_name"
            placeholder="Last Name"
            v-bind:className="['input-field']"
            ref="last_name"
            v-on:input="checkInput"
            v-bind:errorMsg="fieldValidation.last_name.message"
            v-bind:containError="fieldValidation.last_name.valid"
          />
          <InputField
            name="username"
            placeholder="Username"
            v-bind:className="['input-field']"
            ref="username"
            v-on:input="checkInput"
            v-bind:errorMsg="fieldValidation.username.message"
            v-bind:containError="fieldValidation.username.valid"
          />
          <InputField
            name="password"
            type="password"
            placeholder="Password"
            v-bind:className="['input-field']"
            ref="password"
            v-on:input="checkInput"
            v-bind:errorMsg="fieldValidation.password.message"
            v-bind:containError="fieldValidation.password.valid"
          />
          <button class="button" id="sign-up-btn">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "../components/InputField";
import AlertMsg from "../components/AlertMsg";
import apiHelper from "../helper/apiHelper";
import valHelpers from "../helper/formValHelper";

export default {
  name: "Sign-up",
  components: {
    InputField,
    AlertMsg
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      isValidForm: false,
      fieldValidation: {
        first_name: {
          valid: false,
          message: "",
        },
        last_name: {
          valid: false,
          message: "",
        },
        username: {
          valid: false,
          message: "",
        },
        password: {
          valid: false,
          message: "",
        },
      },
      alertCustomStyle: {},
      alertMessage: "",
      iconName: "success",
      title: "",
      buttons: { ok: true, cancel: false },
    };
  },
  methods: {
    alertBtnClicked(data) {
      if(data.name == 'ok') {
        this.alertCustomStyle = {"display": "none"};
        this.$router.push({name: "Sign-in"});
      }
    },

    checkInput(data) {
      let validationRules = {
        first_name: { length: 5 },
        last_name: { length: 5 },
        username: { length: 5 },
        password: { length: 8 },
      };
      let fieldName = data["eventName"];
      this[fieldName] = data["data"];
      this.fieldValidation[fieldName] = valHelpers.checkLength(
        validationRules[fieldName].length,
        this[fieldName]
      );
      this.isValidForm =
        this.fieldValidation.first_name.valid &&
        this.fieldValidation.last_name.valid &&
        this.fieldValidation.username.valid &&
        this.fieldValidation.password.valid;
    },

    async submitData() {
      let data = {
        first_name: this.first_name,
        last_name: this.last_name,
        username: this.username,
        password: this.password,
      };
      if (!this.isValidForm) {
        for (let field of Object.values(this.fieldValidation)) {
          field.message = field.valid
            ? ""
            : field.message
            ? field.message
            : " should not be empty!";
        }
        return;
      }

      let response = await apiHelper("/user", "POST", data);
      if (!response.error) {
        this.iconName = "success";
        this.title = "Successfully Registered!";
        this.alertMessage = "Please sign in";
      } else {
        this.iconName = "danger";
        this.title = "Registration Failed";
        this.alertMessage = response.message;
      }
      this.alertCustomStyle = { display: "grid" };
    },
  },
};
</script>

<style scoped>
.input-field {
  margin: 25px 0px;
}

#wrapper {
  position: fixed;
  background: linear-gradient(to bottom right, #927059, #f2edd7);
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
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
  color: #755139;
}

#img-sign-up {
  width: 10em;
  height: 10em;
}

#text-saying {
  font-weight: 900;
  font-size: larger;
}

#sub-head {
  font-weight: 500;
  font-size: small;
  margin-top: 60px;
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

.msg-wrapper {
  width: 70%;
}

#sign-in {
  background-color: #f2edd7;
  color: #755139;
}

#sign-in:hover {
  background-color: #927059;
  color: #f2edd7;
}

#sign-up-btn {
  background-color: #755139;
  color: #f2edd7;
}

#sign-up-btn:hover {
  opacity: 0.5;
}

#text-sign-up {
  font-weight: 700;
  font-size: larger;
}

/* Media queries */
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