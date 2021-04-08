<template>
  <dv-border-box-10 class="nav-btn-container">
    <slot></slot>
  </dv-border-box-10>
</template>

<script>
export default {
  name: "navigation-button-container"
}
</script>

<style scoped>
.nav-btn-container {
  width: 2rem;
  height: fit-content;
}
</style>