<template>
  <div class="input-cont" v-bind:style="addStyle" v-bind:class="className">
    <input 
        v-bind:type="type" 
        v-bind:placeholder="placeholder" 
        v-bind:name="name" 
        class="inputs"/>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    type: { type: String, default: "text" },
    addStyle: { type: Object},
    placeholder: { type: String, default: "Input field" },
    name: { type: String, required: true },
    className: { type: Array},
  },
};
</script>

<style scoped>
.input-cont {
  width: 15em;
  height: 40px;
  background-color: white;
  text-align: center;
}

.inputs {
  border-radius: 5px;
  border: none;
  width: 80%;
  height: stretch;
  outline: none;
}
</style>