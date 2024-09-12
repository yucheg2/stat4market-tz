<template>
  <div class="main-layout">
    <Aside />
    <div class="main-layout__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Aside from "../components/Aside.vue";
</script>

<style lang="scss">
.main-layout {
  display: flex;
  position: relative;
  overflow: scroll;
  overflow-x: hidden;
  max-height: 100vh;


  .aside-menu {
    position: sticky;
    left: 0;
    top: 0;
  }
  &__content {
    flex-grow: 1;
    padding: 25px 40px;

  }
}
</style>
