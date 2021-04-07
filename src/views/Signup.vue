<template>
  <div id="wrapper">
    <div id="container">
      <div id="division-1" class="division">
        <div class="msg-wrapper">
          <img src="@/assets/img/message-signup.png" id="img-sign-up" alt="" />
          <p id="text-saying">Comunication is what makes a team strong</p>
          <p id="sub-head">Already had an account?, Click sign in</p>
          <router-link to="/sign-in"><button id="sign-in" class="button">Sign in</button></router-link>
        </div>
      </div>
      <div id="division-2" class="division">
        <form action="">
          <p id="text-sign-up">Sign up</p>
          <div class="input-cont">
            <input type="text" class="inputs" placeholder="First Name" />
          </div>
          <div class="input-cont">
            <input type="text" class="inputs" placeholder="Last Name" />
          </div>
          <div class="input-cont">
            <input type="text" class="inputs" placeholder="Username" />
          </div>
          <div class="input-cont">
            <input type="text" class="inputs" placeholder="Password" />
          </div>

          <button class="button" id="sign-up-btn">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sign-up",
};
</script>

<style scoped>
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

.input-cont {
  width: 15em;
  height: 40px;
  margin: 25px 0px;
  background-color: white;
}

.inputs {
  border-radius: 5px;
  border: none;
  width: 80%;
  height: stretch;
  outline: none;
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