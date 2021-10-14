<template>
  <div>
    <label v-if="label" class="mb-2">{{ label }}</label>
    <input
      autofocus
      inputmode="tel"
      :value="value"
      v-mask="'## ## ## ## ##'"
      :placeholder="placeholder"
      type="text"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    validations: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped>
input {
  width: 100%;
  height: 52px;
  border-radius: 5px;
  padding: 0 13px;
  border: 2px solid rgba(235, 235, 235, 0.81961) ;
}

input[type="text"]:focus {
  border: 2px solid var(--mainColor) !important;
}

</style>
