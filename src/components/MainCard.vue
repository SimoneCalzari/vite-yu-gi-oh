<script>
import { store } from "../store";
export default {
  props: {
    indexCard: Number,
  },
  methods: {
    getImgUrl() {
      return store.cardsList[this.indexCard].card_images[0].image_url;
    },
    getCardName() {
      return store.cardsList[this.indexCard].name;
    },
    getCardType() {
      if (store.cardsList[this.indexCard].hasOwnProperty("archetype")) {
        return store.cardsList[this.indexCard].archetype;
      }
      return store.cardsList[this.indexCard].race;
    },
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="card">
    <img :src="getImgUrl()" alt="" />
    <h4 class="upper">{{ getCardName() }}</h4>
    <h5>{{ getCardType() }}</h5>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/mixins" as *;

.card {
  @include grid($cards-per-row, $main-grid-gap);
  background-color: $main-color;
  text-align: center;
  img {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  h4 {
    color: $header-color;
    font-size: 14px;
  }
  h5 {
    color: $counter-color;
    margin: 20px 0;
    font-size: 18px;
  }
}
</style>
