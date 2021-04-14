<template>
  <div class="input-cont" v-bind:class="className">
    <input
      v-bind:ref="name"
      v-if="type != 'textarea'"
      v-bind:type="type"
      v-bind:placeholder="placeholder"
      v-bind:name="name"
      v-bind:class="['inputs']"
      v-bind:style="inputClass"
      v-on:keyup="passData"
      v-model="data"
    />

    <textarea
      v-model="data"
      v-if="type == 'textarea'"
      v-on:keyup="passData"
      v-bind:placeholder="placeholder"
      v-bind:name="name"
      v-bind:class="['inputs', 'rid-scroll']"
      v-bind:style="inputClass"
      v-bind:ref="name"
      autosize
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    type: { type: String, default: "text" },
    inputClass: { type: Object },
    placeholder: { type: String, default: "Input field" },
    name: { type: String, required: true },
    className: { type: Array },
  },
  data() {
    return {
      data: ""
    }
  },
  methods: {
    passData() {
      let eventName = this.$vnode.data.ref;
      this.$emit('input', {eventName: eventName, data:this.data});
    }
  }
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

.rid-scroll::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.rid-scroll::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

/* Handle */
.rid-scroll::-webkit-scrollbar-thumb {
  opacity: 0.1;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>