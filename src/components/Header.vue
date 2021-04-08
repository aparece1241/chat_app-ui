<template>
  <div id="header">
    <div id="container">
      <div id="logo">
        <span id="logo-text">Let's Talk</span>
      </div>
      <div id="navs">
        <router-link to="/sign-up"><span class="nav-item">Sign up</span></router-link>
        <router-link to="/sign-in"><span class="nav-item">Sign in</span></router-link>
        <span class="nav-item">About</span>
        <span class="nav-item">Services</span>
      </div>

      <div id="button-cont">
        <span id="bar-btn" v-on:click="toogleNavs"
          ><i
            v-bind:class="[showNav ? 'fa fa-times' : 'fa fa-bars']"
            aria-hidden="true"
          ></i
        ></span>
      </div>

      <div id="ghost-navs" v-show="showNav">
        <p class="ghost-nav-item">Services</p>
        <p class="ghost-nav-item">About</p>
        <p class="ghost-nav-item">Sign in</p>
        <p class="ghost-nav-item">Sign up</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toogleNavs() {
      this.showNav = !this.showNav;
    },
    getData() {
      fetch('https://mstalk.herokuapp.com/user/users')
        .then((response) => {
          response.json().then((data) => {
            console.log(data);
          })
          .catch((err) => console.log(err));
        }).then((err) => console.log(err));
    }
  },
  computed: {},
  created (){
    this.getData();
  },
  mounted () {
  }
};
</script>

<style scoped>
#header {
  position: fixed;
  width: 100%;
  width: -webkit-fill-available;
  width: -moz-fill-available;
  width: -o-fill-available;
  width: -ms-fill-available;
  width: stretch;
  padding: 0px 20px;
  display: grid;
  color: #f2edd7;
  background-color: #755139;
  font-weight: 600;
  box-shadow: 0px 2px 5px gray;
  height: 70px;
  z-index: 2;
  top: 0;
}

#container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

#logo-text {
  font-size: 1.5em;
  cursor: pointer;
  padding: 0px;
}

#navs {
  height: 70px;
}

#button-cont {
  display: none;
}

#bar-btn {
  float: right;
  padding: 10px 15px;
  border: solid 1px #f2edd7;
  border-radius: 5px;
  cursor: pointer;
}

.nav-item {
  float: right;
  cursor: pointer;
  padding: 24px 25px;
   color: #f2edd7;
}

.nav-item:hover {
  background-color: #f2edd7;
  color: #755139;
}

#ghost-navs {
  display: none;
  color: black;
  position: fixed;
  right: 0;
  top: 70px;
  color: #755139;
  width: 9.5em;
  background-color: #f2edd7;
  border: solid 2px whitesmoke;
  border-radius: 2px;
  z-index: 1;
  animation: slide 0.5s 1;
  padding: 20px 10px;
}

.ghost-nav-item {
  cursor: pointer;
  border: solid 1px #755139;
  width: 100%;
  text-align: center;
  margin-bottom: 0px;
  padding: 10px;
  margin-right: 20px;
}

.ghost-nav-item:hover {
  background-color: #755139;
  color: #f2edd7;
  border: solid 1px #f2edd7;
}

@keyframes slide {
  from {
    right: -6em;
  }
  to {
    right: 0em;
  }
}

@keyframes slide-back {
  from {
    right: 0em;
  }
  to {
    right: -9.5em;
  }
}

@media screen and (min-width: 1444px) {
  #container {
    justify-self: center;
    width: 1444px;
  }

  #ghost-navs {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  #navs {
    display: none;
  }

  #ghost-navs {
    display: block;
  }

  #button-cont {
    display: block;
  }
}
</style>
