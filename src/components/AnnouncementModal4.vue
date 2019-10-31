<template>
  <div class="modal-backdrop" v-show="show">
    <div class="modal">
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
      required: true,
      type: Boolean,
    },
    preventBackgroundScrolling: {
      type: Boolean,
      default: true,
    },
  },
  name: 'announcement-modal-4',
  methods: {
    dismiss() {
      this.$emit('close');
    },
  },
  watch: {
    show: {
      immediate: true,
      handler(show) {
        if (show) {
          this.preventBackgroundScrolling && document.body.style.setProperty('overflow', 'hidden');
        } else {
          this.preventBackgroundScrolling && document.body.style.removeProperty('overflow');
        }
      },
    },
  },
  created() {
    const EscapeHandler = (e) => {
      if (e.key === 'Escape' && this.show) {
        this.dismiss();
      }
    };
    document.addEventListener('keydown', EscapeHandler);
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', EscapeHandler);
    });
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
