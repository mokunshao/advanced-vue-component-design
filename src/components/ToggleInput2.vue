<template>
  <div>
    <span
      role="checkbox"
      :aria-checked="toggleValue.toString()"
      tabindex="0"
      @click="toggle"
      @keydown.space.prevent="toggle"
      >{{ toggleValue ? "✅" : "❎" }}</span
    >
    <span>订阅 Newsletter</span>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'toggleValue',
    event: 'toggleAction',
  },
  name: 'toggle-input-2',
  props: {
    toggleValue: {
      type: Boolean,
    },
  },
  methods: {
    toggle() {
      this.$emit('toggleAction', !this.toggleValue);
    },
  },
};
</script>

<style lang="scss" scoped>
span[role="checkbox"] {
  cursor: pointer;
}
</style>
