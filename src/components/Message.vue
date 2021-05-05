<template>
  <div id="message-cont">
    <div id="wrap" v-bind:class="messageType">
      <span v-bind:class="messageType" id="message-show">{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: { type: String, required: true },
    messageType: { type: String, required: true },
  },
  computed: {},
};
</script>

<style scoped>
#wrap {
  width: 50%;
  background: none !important;
  border: solid white;
}

#message-cont {
  border: none;
}

#message-show {
  color: white;
  padding: 8px;
  border-radius: 12px;
  margin-left: 7px;
  text-align: justify;
  margin: 5px 0px;
  max-width: 100%;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.my-message {
  float: left;
  background-color: rgb(0 0 0 / 50%);
}

.incoming-message {
  float: right;
  background-color: rgb(171 128 51) !important;
}
</style>
