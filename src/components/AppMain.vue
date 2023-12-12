<script>
import MainLoader from "./MainLoader.vue";
import MainCards from "./MainCards.vue";
import MainCardsCount from "./MainCardsCount.vue";
import MainSelect from "./MainSelect.vue";
import { store } from "../store";
export default {
  components: {
    MainLoader,
    MainCards,
    MainCardsCount,
    MainSelect,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="cards-select">
        <MainSelect />
      </div>
      <div class="cards-list">
        <MainLoader v-show="!store.isLoaded" />
        <MainCardsCount v-show="store.isLoaded" />
        <MainCards v-show="store.isLoaded" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
main {
  background-color: $main-color;
  padding-bottom: 50px;
  .cards-list {
    padding: 50px;
    background-color: $header-color;
  }
}
</style>
