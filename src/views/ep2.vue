<template>
  <div class="modal">
    <div>设置</div>
    <label for="email">Email: </label>
    <input v-model="email" type="text" id="email" />
    <toggle-input-2 v-model="receiveNewsletter"></toggle-input-2>
    <button @click="submit">更新设置</button>
  </div>
</template>

<script>
import ToggleInput2 from '../components/ToggleInput2.vue';

export default {
  components: { ToggleInput2 },
  name: 'ep2',
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
