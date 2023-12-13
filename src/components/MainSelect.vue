<script>
import { store } from "../store";
import axios from "axios";
export default {
  data() {
    return {
      store,
      archetypes: [],
      archetypesApi: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    };
  },
  created() {
    axios.get(this.archetypesApi).then((response) => {
      this.archetypes = response.data;
    });
  },
};
</script>

<template>
  <select
    id="filter-cards"
    v-model="store.currentArchetype"
    @change="$emit('filter')"
  >
    <option value="">Select Archetype</option>
    <option v-for="archetype in archetypes" :value="archetype.archetype_name">
      {{ archetype.archetype_name }}
    </option>
  </select>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
select {
  margin: 20px 10px;
  padding: 10px;
  border: 2px solid $border-color;
  border-radius: 5px;
  color: $counter-color;
  font-size: 16px;
  font-weight: bold;
}
</style>
