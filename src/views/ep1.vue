<template>
  <div class="modal">
    <div>设置</div>
    <label for="email">Email: </label>
    <input v-model="email" type="text" id="email" />
    <toggle-input v-model="receiveNewsletter"></toggle-input>
    <button @click="submit">更新设置</button>
  </div>
</template>

<script>
import ToggleInput from '../components/ToggleInput.vue';

export default {
  components: { ToggleInput },
  name: 'ep1',
  data() {
    return {
      email: '11',
      receiveNewsletter: false,
    };
  },
  methods: {
    submit() {
      console.log({
        email: this.email,
        receiveNewsletter: this.receiveNewsletter,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  border: 1px solid black;
  padding: 1em;
  display: inline-block;
}
</style>
