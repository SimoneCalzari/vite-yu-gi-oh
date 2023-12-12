<script>
export default {};
</script>

<template>
  <div class="loader flex">
    <div class="circle">
      <div class="blank"></div>
    </div>
    <h3 class="upper">Cards Loading...</h3>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.loader {
  flex-direction: column;
  align-items: center;
  height: 80vh;
  padding-top: 100px;
}
h3 {
  color: $counter-color;
  font-size: 30px;
  word-spacing: 3px;
}

.circle {
  width: 100px;
  aspect-ratio: 1 / 1;
  border: 10px solid $main-color;
  border-radius: 50%;
  margin-bottom: 30px;
}

.blank {
  width: 120px;
  height: 10px;
  background-color: white;
  position: relative;
  left: -20px;
  top: 35px;
  animation: loading 1s linear 0s infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
