<template>
  <input :value="value" type="text" ref="datepicker" />
</template>

<script>
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';

export default {
  name: 'date-picker',
  props: {
    value: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD',
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    const pikaday = new Pikaday(
      {
        field: this.$refs.datepicker,
        format: this.format,
        onSelect: () => {
          this.$emit('input', pikaday.toString());
        },
        ...this.options,
      },
    );
  },
};
</script>

<style lang="scss" scoped>
</style>
