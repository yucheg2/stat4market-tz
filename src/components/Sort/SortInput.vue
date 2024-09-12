<template>
  <div class="sort-input">
    за
    <NumberInput :model-value="7" postscript="дней" />
    <QuestionIcon />
  </div>
</template>

<script setup lang="ts">
import NumberInput from "../form/NumberInput.vue";
import QuestionIcon from "../../assets/icons/question.svg";

</script>

<style lang="scss">
.sort-input {
    display: flex;
    align-items: center;
    gap: 4px;

    
}
</style>
