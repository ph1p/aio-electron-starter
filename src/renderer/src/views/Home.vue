<template>
  <div class="home">
    <h1>aio-electron-starter</h1>

    <img src="@/assets/logo.png" alt="Vue-Logo" />

    <h2>
      current number in store: <strong>{{ currentNumber }}</strong>
    </h2>

    <div>
      <button @click="increment(10)">increment +10</button>
      <button @click="decrement(10)">decrement -10</button>
    </div>

    <div>
      <button @click="asyncIncrement(10)">asyncIncrement -10</button>
      <button @click="asyncDecrement(10)">asyncDecrement -10</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  electron: {
    width: 500,
    height: 520
  },
  computed: {
    ...mapGetters(['currentNumber'])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'asyncDecrement',
      'asyncIncrement'
    ])
  }
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  h2 {
    font-weight: normal;
  }
}
</style>
