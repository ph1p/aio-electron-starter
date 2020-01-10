<template>
  <div class="example">
    <h1>Example Page</h1>

    <h2>
      again the value from the store: <strong>{{ currentNumber }}</strong>
    </h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  electron: {
    width: 500,
    height: 240
  },
  computed: {
    ...mapGetters(['currentNumber'])
  }
};
</script>

<style lang="scss" scoped>
.example {
  text-align: center;
  h2 {
    font-weight: normal;
  }
}
</style>
