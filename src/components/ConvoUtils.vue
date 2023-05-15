<template>
    <div class="container">
      <p>
        <span class="convo-title"><i :class="icon"></i></span>
        {{ title }}
      </p>
      <span class="badge" v-if="badge">{{ badge }}</span>
    </div>
  </template>
  <script>
    export default {
        name: "ConvoUtils",
        props: {
            title: {type: String, default: "unknown"},
            icon: {type: String, default: "fa fa-plus"},
            badge: {type: Number, default: 0}
        },
        computed: {}
    };
  </script>
  
  <style scoped>
  .container {
    margin: 2px 4px;
    padding: 8px;
    background: floralwhite;
    box-shadow: 0px 0px 74px #dedad5;
    border-radius: 7px;
    cursor: pointer;
    position: relative;
  }
  
  .container:hover {
    background-color: white;
    /* opacity: 0.4; */
  }
  
  .convo-title {
    background: #147dff;
    padding: 9px 12px;
    font-size: 1em;
    border-radius: 25px;
    color: white;
    margin-right: 10px;
  }

  .badge {
    position: absolute;
    right: 0;
    margin-right: 15px;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    background: red;
    font-weight: bold;
    color: white;
    padding: 5px 7px;
    border-radius: 5px;
  }
  </style>