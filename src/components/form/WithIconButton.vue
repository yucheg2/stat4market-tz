<template>
  <button class="with-icon-button">
    <slot name="icon"></slot>
    <slot name="content" />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.with-icon-button {
  cursor: pointer;

  background: transparent;

  display: flex;
  align-items: center;
  gap: 4px;

  padding: 10px 16px;

  border: 1px solid #d8dce9;
  border-radius: 4px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
</style>
