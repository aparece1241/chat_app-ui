<template>
  <div id="header">
    <!-- If there is ang authenticated user -->
    <div class="containerv2" v-if="!isUserObjEmpty">
      <div id="logo">
        <span id="logo-text">mstalk</span>
      </div>
      <div id="search-cont">
      </div>
      <div class="user-img" v-on:click="toggleCollapsible">
        <div class="status-img-wrapper">
          <img src="@/assets/img/default.png" alt="" class="user-profile-img" />
          <div id="online-status"></div>
        </div>
        <span class="username">Hello {{ user.username }}</span>
        <div id="dropdown" v-show="showCollapsible">
          <p class="ghost-nav-item">My Profile</p>
          <p class="ghost-nav-item" v-on:click="logout">Sign out</p>
        </div>
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
        <div
          class="ghost-nav-item"
          id="ghost-img-cont"
          v-on:click="toggleCollapsible"
        >
          <div class="status-img-wrapper">
            <img
              src="@/assets/img/default.png"
              class="user-profile-img"
              id="ghost-img"
            />
            <div id="online-status"></div>
          </div>
          <span class="username" id="ghost-img-nav"
            >Hello {{ user.username }}</span
          >
        </div>
        <div id="wrapper-sub-nav" v-show="showCollapsible">
          <p class="ghost-nav-item">My Profile</p>
          <p class="ghost-nav-item" v-on:click="logout">Sign out</p>
        </div>
        <p class="ghost-nav-item">Services</p>
        <p class="ghost-nav-item">About</p>
        <router-link to="/sign-in" v-if="isUserObjEmpty"
          ><p class="ghost-nav-item">Sign in</p></router-link
        >
        <router-link to="/sign-up" v-if="isUserObjEmpty"
          ><p class="ghost-nav-item">Sign up</p></router-link
        >
      </div>
    </div>

    <!-- If there is no authenticated user -->
    <div class="container" v-if="isUserObjEmpty">
      <div id="logo">
        <span id="logo-text">mstalk</span>
      </div>
      <div id="navs">
        <router-link to="/sign-up" v-if="isUserObjEmpty"
          ><span class="nav-item">Sign up</span></router-link
        >
        <router-link to="/sign-in" v-if="isUserObjEmpty"
          ><span class="nav-item">Sign in</span></router-link
        >
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
        <router-link to="/sign-in" v-if="isUserObjEmpty"
          ><p class="ghost-nav-item">Sign in</p></router-link
        >
        <router-link to="/sign-up" v-if="isUserObjEmpty"
          ><p class="ghost-nav-item">Sign up</p></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import socket from "../plugins/socketio-client";
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "Header",
  components: {},
  data() {
    return {
      showNav: false,
      showCollapsible: false,
    };
  },
  methods: {
    ...mapMutations({setUserState : 'AuthModule/setUserState'}),
    toogleNavs() {
      this.showNav = !this.showNav;
    },
    toggleCollapsible() {
      this.showCollapsible = !this.showCollapsible;
    },
    logout() {
      this.setUserState({});
      this.$router.push({name: 'Sign-in'});
      socket.disConnectSocket();
    }
  },
  computed: {
    ...mapGetters({user: 'AuthModule/getAuthUser'}),
    isUserObjEmpty() {
      return Object.keys(this.user).length == 0;
    }
  },
  created() {
    },
};
</script>

<style scoped>
/* If there is a user authenticated start*/
/* .fa-sort-down:before,
.fa-sort-desc:before {
  margin: 0px 5px;
  font-size: 21px;
}

.fa-sort-desc:before:hover {
  background-color: #f2edd7;
  color: #755139;
}  */
#dropdown {
  background-color: #f2edd7;
  position: absolute;
  border: solid 1px #f2edd7;
  width: 49%;
  top: 63px;
  right: 13%;
  box-shadow: 1px 0px 5px grey;
  border-radius: 5px;
  animation: fade-in 1s 1;
}

#wrapper-sub-nav {
  animation: fade-in 1s 1;
  font-weight: 300;
}

#ghost-img {
  width: 30px !important;
  height: 30px !important;
}

#ghost-img-cont {
  display: flex;
  justify-items: center;
  align-items: center;
}

#ghost-img-nav {
  font-size: 0.8em !important;
}

.username {
  justify-self: start;
  margin: 0px 7px;
  cursor: pointer;
}

#search-btn {
  border: none;
  margin: 0px 2px;
  border-radius: 5px;
  width: 43px;
  cursor: pointer;
  background-color: #755139;
  border: solid 1px #f2edd7;
  color: #f2edd7;
  outline: none;
}

#search-btn:hover {
  color: #755139;
  background-color: #f2edd7;
}

.search-input {
  width: 100%;
  border-radius: 5px;
  color: #ccc39e;
}

#search-cont {
  display: grid;
  grid-template-columns: 1fr 0.2fr;
}

.status-img-wrapper {
  position: relative;
  cursor: pointer;
}

.user-img {
  display: grid;
  align-items: center;
  justify-items: end;
  grid-template-columns: 1fr 1fr;
  position: relative;
}

#online-status {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: rgb(58, 207, 58);
  bottom: 4px;
  right: 2px;
  border-radius: 7px;
}

.user-profile-img {
  border: solid 2px #f2edd7;
  background-color: white;
  width: 48px;
  height: 48px;
  border-radius: 30px;
}

a {
  text-decoration: none;
}

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

.containerv2 {
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.5fr;
  align-items: center;
}
/* If there is a user aouthenticated end */

.container {
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
  padding: 26px 25px;
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
  border: none;
  width: 87%;
  text-align: center;
  margin: 2px 0px;
  padding: 10px;
  color: #755139;
  text-decoration: none;
}

.ghost-nav-item:hover {
  background-color: #755139;
  color: #f2edd7;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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

/* Media Queries start */
@media screen and (min-width: 1444px) {
  .container,
  .containerv2 {
    justify-self: center;
    width: 1444px;
  }

  #ghost-navs {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  .containerv2 {
    grid-template-columns: 1fr 1fr;
  }

  #navs {
    display: none;
  }

  #search-cont,
  .user-img {
    display: none;
  }

  #ghost-navs {
    display: block;
  }

  #button-cont {
    display: block;
  }
}
/* Media Queries end */
</style>
