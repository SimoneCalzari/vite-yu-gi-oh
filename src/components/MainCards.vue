<script>
import MainCard from "./MainCard.vue";
import { store } from "../store";
import axios from "axios";
export default {
  created() {
    axios.get(this.urlApi).then((response) => {
      store.cardsList = response.data.data;
      setTimeout(() => {
        store.isLoaded = true;
      }, 2000);
    });
  },
  components: {
    MainCard,
  },
  data() {
    return {
      store,
      urlApi: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0",
    };
  },
};
</script>

<template>
  <div class="cards flex">
    <MainCard v-for="card in store.cardsList" :card="card" />
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
