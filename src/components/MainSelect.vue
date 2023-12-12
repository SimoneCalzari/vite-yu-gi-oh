<script>
export default {};
</script>

<template>
  <select name="" id="filter-cards">
    <option value="">Alien</option>
  </select>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
select {
  margin: 20px 10px;
  padding: 10px;
  border: 2px solid $border-color;
  width: 150px;
  border-radius: 5px;
  color: $counter-color;
  font-size: 16px;
  font-weight: bold;
}
</style>
