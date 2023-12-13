<script>
import MainLoader from "./MainLoader.vue";
import MainCards from "./MainCards.vue";
import MainCardsCount from "./MainCardsCount.vue";
import MainSelect from "./MainSelect.vue";
import { store } from "../store";
import axios from "axios";
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
  methods: {
    // METODO MIO PER GENERARE URL API E GESTIRE CASO CON ARCHETYPE DEFAULT VUOTO ""
    urlWithQuery() {
      const queryNum = `?num=${this.store.num}`;
      const queryOff = `&offset=${this.store.offset}`;
      const queryType = `&archetype=${this.store.currentArchetype}`;
      if (this.store.currentArchetype === "") {
        return this.store.urlApi + queryNum + queryOff;
      }
      return this.store.urlApi + queryNum + queryOff + queryType;
    },
    typeSearch() {
      this.store.isLoaded = false;
      // GESTIONE QUERY PARAMETERS CON MIO METODO
      axios.get(this.urlWithQuery()).then((response) => {
        this.store.cardsList = response.data.data;
      });
      // GESTIONE QUERY PARAMETERS CON AXIOS
      // axios
      //   .get(this.store.urlApi, {
      //     params: {
      //       num: this.store.num,
      //       offset: this.store.offset,
      //       archetype: this.store.currentArchetype,
      //     },
      //   })
      //   .then((response) => {
      //     this.store.cardsList = response.data.data;
      //   });
    },
  },
  created() {
    // PRIMA CHIAMATA AL LOAD CON GESTIONE QUERY MIA
    axios.get(this.urlWithQuery()).then((response) => {
      this.store.cardsList = response.data.data;
    });

    // PRIMA CHIAMATA AL LOAD CON GESTIONE QUERY AXIOS
    // axios
    //   .get(this.store.urlApi, {
    //     params: {
    //       num: this.store.num,
    //       offset: this.store.offset,
    //       archetype: this.store.currentArchetype,
    //     },
    //   })
    //   .then((response) => {
    //     this.store.cardsList = response.data.data;
    //   });
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="cards-select">
        <MainSelect @filter="typeSearch" />
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
