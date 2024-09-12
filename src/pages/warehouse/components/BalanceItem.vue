<template>
  <div class="balance">
    <NumberInput v-if="editable" postscript="шт." :model-value="count" />
    <span class="balance__count" v-else>{{ addSpaceInNumber(count) }} шт</span>

    <span class="balance__days" v-if="showDays">Хватит на {{ days }} дн</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { EditableField } from "../warehouse.i";
import NumberInput from "../../../components/form/NumberInput.vue";
import { addSpaceInNumber } from "../../../utils/addSpaceInNumber";

interface BalanceItemProps extends EditableField {
  showDays?: boolean;
}

withDefaults(defineProps<BalanceItemProps>(), {
  showDays: true,
});

const days = ref(549);
</script>

<style lang="scss">
.balance {

    height: 100%;
  .number-input {
    padding-inline: 0;
  }

  &__days {
    box-sizing: border-box;
    display: block;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;

    border-radius: 4px;
    padding: 5px 16px;
    background-color: #f8f8f8;
    min-width: 128px;

    margin-top: 5px;
  }

  &__count {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #333333;

    display: block;
  }
}
</style>
