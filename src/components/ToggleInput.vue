<template>
  <div>
    <span
      role="checkbox"
      :aria-checked="value.toString()"
      tabindex="0"
      @click="toggle"
      @keydown.space.prevent="toggle"
      >{{ value ? "✅" : "❎" }}</span
    >
    <span>订阅 Newsletter</span>
  </div>
</template>

<script>
export default {
  name: 'toggle-input',
  props: {
    value: {
      type: Boolean,
    },
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
span[role="checkbox"] {
  cursor: pointer;
}
</style>
