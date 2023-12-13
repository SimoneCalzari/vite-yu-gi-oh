import { reactive } from "vue";

export const store = reactive({
  cardsList: [],
  urlApi: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  num: 200,
  offset: 0,
  isLoaded: false,
  currentArchetype: "",
});
