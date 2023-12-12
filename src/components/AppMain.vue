<script>
import MainCards from "./MainCards.vue";
import MainCardsCount from "./MainCardsCount.vue";
export default {
  components: {
    MainCards,
    MainCardsCount,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="cards-list">
        <MainCardsCount />
        <MainCards />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

main {
  background-color: $main-color;
  .cards-list {
    padding: 50px;
    background-color: $header-color;
  }
}
</style>
