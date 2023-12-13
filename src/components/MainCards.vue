<script>
import MainCard from "./MainCard.vue";
import { store } from "../store";

export default {
  components: {
    MainCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="cards flex">
    <MainCard
      v-for="(card, index) in store.cardsList"
      :card="card"
      :index="index"
    />
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/mixins" as *;

.cards {
  flex-wrap: wrap;
  @include gap($main-grid-gap);
}
</style>
