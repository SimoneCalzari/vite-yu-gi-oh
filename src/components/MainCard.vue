<script>
import { store } from "../store";
export default {
  props: {
    card: Object,
    index: Number,
  },
  methods: {
    getImgUrl() {
      return this.card.card_images[0].image_url;
    },
    getCardName() {
      return this.card.name;
    },
    getCardType() {
      if (this.card.hasOwnProperty("archetype")) {
        return this.card.archetype;
      }
      return this.card.race;
    },
    lastImgLoaded() {
      if (this.index === store.cardsList.length - 1) {
        store.isLoaded = true;
      }
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
    <img :src="getImgUrl()" :alt="getCardName()" @load="lastImgLoaded()" />
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
