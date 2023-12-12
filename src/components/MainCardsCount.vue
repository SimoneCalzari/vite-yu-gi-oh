<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h3>Found {{ store.cardsList.length }} cards</h3>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
h3 {
  padding: 20px 15px;
  color: $header-color;
  background-color: $counter-color;
}
</style>
