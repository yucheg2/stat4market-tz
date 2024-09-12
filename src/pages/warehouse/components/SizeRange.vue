<template>
  <div class="size-range">
    <button @click="showTable = !showTable" class="size-range__button">
      <span class="dots-underline">Размерный ряд</span>
      <TwoArrowsIcon :class="showTable ? 'active' : ''" />
    </button>
    <div class="size-range__content" v-if="showTable">
      <div class="size-range__header">
        <MeasuringTapeIcon />
        <span>Размерный ряд</span>
      </div>
      <SizeTable :sizes="sizesObj" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MeasuringTapeIcon from "../../../assets/icons/measuringTape.svg";
import TwoArrowsIcon from "../../../assets/icons/twoArrows.svg";
import { ref } from "vue";
import SizeTable from "./SizeTable.vue";
import { SizeRange } from "../warehouse.i";

defineProps<{ sizesObj: SizeRange }>();

const showTable = defineModel("showSizes", { default: false });
</script>

<style lang="scss">
.size-range {
  &__button {
    background: none;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 12px;

    span {
      font-size: 14px;
      line-height: 20px;

      color: var(--btn-bg-color);
    }

    svg {
      transition-duration: 0.5s;

      &.active {
        transform: rotate(180deg);
      }
    }
  }

  &__content {
    padding: 12px 16px 16px 12px;
    background-color: #f8f8f8;
    border-radius: 4px;

    border: solid #a5d274;
    border-width: 0 0 0 4px;

    overflow: hidden;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 12px;
    font-weight: 400;
    line-height: 16px;

    margin-left: 12px;
  }
}
</style>
