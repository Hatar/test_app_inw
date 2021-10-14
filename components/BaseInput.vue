<template>
  <div>
    <label for="exampleFormControlInput1" class="form-label">{{ label }}</label>
    <input
      class="form-control shadow-none input-lg mb-3"
      :value="value"
      :type="type"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      v-mask="mask"
    />
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
    },
    lenghtInput: {
        type: String,
    },
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    type: {
      required: false,
      type: String,
      default: "text",
    },
    validations: {
      type: Array,
      default: () => [],
    },
    mask: {
      type: String,
      required: false,
      default: "",
    },
    inputmode: {
      type: String,
      required: false,
      default: "",
    },
    direction: {
      type: String,
      required: false,
      default: "",
    },
    isTel: {
      type: Boolean,
      default: false,
    },
  }
};
</script>
<style scoped>
::placeholder{
  font-size: 16px;
  line-height: 1.4;
}
</style>
