<script>
import HeaderLogo from "./HeaderLogo.vue";
import HeaderTitle from "./HeaderTitle.vue";
export default {
  components: {
    HeaderLogo,
    HeaderTitle,
  },
};
</script>

<template>
  <header class="flex">
    <HeaderLogo />
    <HeaderTitle />
  </header>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

header {
  padding: 20px 25px;
  background-color: $header-color;
  align-items: center;
}
</style>
