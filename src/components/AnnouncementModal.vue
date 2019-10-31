<template>
  <div class="modal-backdrop" v-show="show">
    <div class="modal" ref="modal" tabindex="0" @keydown.esc="dismiss">
      <div>
        通知
      </div>
      <button @click="dismiss">close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
    },
  },
  name: 'announcement-modal',
  methods: {
    dismiss() {
      this.$emit('close');
    },
  },
  watch: {
    show(show) {
      if (show) {
        this.$nextTick(() => {
          this.$refs.modal.focus();
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1em;
  font-size: 1em;

  &-backdrop {
    background-color: rgba($color: #000000, $alpha: 0.5);
    left: 0;
    top: 0;
    position: fixed;
    height: 100%;
    width: 100%;
  }
}
</style>
