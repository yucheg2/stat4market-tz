<template>
  <div class="sort">
    <span>
      <slot />
    </span>
    <SortIcon />
    <QuestionIcon v-if="showQuestion" />
  </div>
</template>

<script setup lang="ts">
import SortIcon from "../../assets/icons/sorting.svg";
import QuestionIcon from "../../assets/icons/question.svg";

withDefaults(
  defineProps<{
    showQuestion?: boolean;
  }>(),
  {
    showQuestion: true,
  }
);
</script>

<style lang="scss">
.sort {
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;

  display: flex;
  align-items: center;

  gap: 4px;
}
</style>
