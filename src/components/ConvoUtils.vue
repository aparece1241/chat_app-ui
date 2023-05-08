<template>
    <div class="container">
      <p>
        <span class="convo-title"><i :class="icon"></i></span>
        {{ title }}
      </p>
    </div>
  </template>
  <script>
    export default {
        name: "ConvoUtils",
        props: {
            title: {type: String, default: "unknown"},
            icon: {type: String, default: "fa fa-plus"}
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
  </style>