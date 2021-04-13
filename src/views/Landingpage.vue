<template>
  <div id="wrapper">
    <Header />
    <div id="cont">
      <div class="division" id="division-1">
        <div id="tag-cont">
          <p id="head-line">Connecting People</p>
          <p class="sub-head-line">Connecting People around the</p>
          <p class="sub-head-line">world through messages</p>

          <router-link to='/home'>
            <button id="get-started-btn">Get Started</button>
          </router-link>
        
        </div>
      </div>
      <div class="division" id="division-2">
        <img id="ft-picture-1" src="@/assets/img/img-display.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  title: 'mstalk',
  name: "Landingpage",
  components: {
    Header,
  },
};
</script>

<style scoped>
#get-started-btn {
  margin: 20px 0px;
  width: 170px;
  height: 40px;
  border: none;
  color: #f2edd7;
  background-color: #755139;
  border-radius: 8px;
  box-shadow: 1px 3px 5px gray;
  cursor: pointer;
  font-weight: 600;
}

#get-started-btn:hover {
  opacity: 0.5;
  border: solid 1px #755139;
}

#division-2 {
  justify-self: left;
}

#division-1 {
  justify-self: right;
}

.sub-head-line {
  font-weight: 200;
  margin: 10px 0px;
}

#head-line {
  font-weight: bold;
  font-size: 3em;
}

#cont {
  margin-top: 35px !important;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.division {
  text-align: center;
}

#tag-cont {
  margin: 5em;
  text-align: justify;
  width: 18em;
  color: #755139;
}

#ft-picture-1 {
  width: 20em;
  height: 23em;
  margin: 0px 8em;
}

@media screen and (min-width: 1444px) {
  #cont {
    width: 100%;
  }

  #wrapper {
    width: 1444px;
    display: grid;
    justify-items: center;
  }
}

@media screen and (max-width: 900px) {
  #cont {
    display: block;
    width: 100vw;
    justify-items: center;
    height: auto;
  }

  .division {
    width: 100%;
  }

  #ft-picture-1 {
    width: 100%;
    margin: 0px;
    object-fit: scale-down;
  }

  #head-line {
    margin-top: 500px;
  }

  #tag-cont {
    width: 100vw;
    text-align: center;
    margin: 0px;
  }
}
</style>