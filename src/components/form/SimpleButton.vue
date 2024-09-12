<template>
  <button class="simple-button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.simple-button {
  padding: 4px 8px;
  background-color: #5068a5;
  border: none;
  border-radius: 4px;

  cursor: pointer;

  color: var(--white-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
</style>
