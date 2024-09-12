<template>
  <div class="per-day-item">
    <NumberInput postscript="шт. / день" v-model="itemsPerDay" />

    <span class="per-day-item__month">{{ itemsPerMonth }} шт. / 30 дней</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import NumberInput from "../../../components/form/NumberInput.vue";
import { addSpaceInNumber } from "../../../utils/addSpaceInNumber";

const props = defineProps<{
  itemsPerDay: number;
}>();

const itemsPerDay = ref<number>(props.itemsPerDay);

const itemsPerMonth = computed(() => addSpaceInNumber(itemsPerDay.value * 30));
</script>

<style lang="scss">
.per-day-item {
  .number-input {
    padding-inline: 0;
  }
  &__month {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #333333;

    display: block;

    margin-top: 5px;
  }
}
</style>
