<template>
  <div id="message-cont">
    <span v-bind:class="messageType" id="message-show">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: { type: String, required: true },
    messageType: { type: String, required: true },
  },
};
</script>

<style scoped>
#message-cont {
  border: none;
}

#message-show {
  color: white;
  padding: 8px;
  border-radius: 12px;
  margin-left: 7px;
}

.my-message {
  float: right;
  background-color: rgb(0 0 0 / 50%)
}

.incoming-message {
  background-color: rgb(171 128 51) !important;
  float: left;
}
</style>