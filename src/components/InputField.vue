<template>
  <div class="input-cont" v-bind:class="className">
    <input v-if="type!='textarea'"
        v-bind:type="type" 
        v-bind:placeholder="placeholder" 
        v-bind:name="name" 
        v-bind:class="['inputs']"
        v-bind:style="inputClass"
        />

      <textarea v-if="type=='textarea'"
          v-bind:placeholder="placeholder" 
          v-bind:name="name" 
          v-bind:class="['inputs']"
          v-bind:style="inputClass" autosize>
      </textarea>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    type: { type: String, default: "text" },
    inputClass: { type: Object},
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
  color: #755139;
}
</style>