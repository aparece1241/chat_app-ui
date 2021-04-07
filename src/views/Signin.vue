<template>
  <div id="wrapper">
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
          <button class="button" id="join-now">Join now</button>
        </div>
      </div>
      <div id="division-2" class="division">
        <form>
          <p id="sign-in-text">Sign in</p>
          <div class="input-cont">
            <input type="text" class="inputs" placeholder="Username" />
          </div>
          <div class="input-cont">
            <input type="password" class="inputs" placeholder="Password" />
          </div>
          <button class="button" id="sign-in">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signin",
};
</script>

<style scoped>
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
