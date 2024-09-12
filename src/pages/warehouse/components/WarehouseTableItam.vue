<template>
  <tr>
    <td>
      <div style="height: 16px; padding: 0;"></div>
    </td>
  </tr>
  <tr :class="'warehouse-item ' + (sizeRange ? 'warehouse-item--top' : '')">
    <td>
      <div class="warehouse-item__product">
        <img
          class="warehouse-item__product-img"
          :src="product.img"
          :alt="product.name"
        />
        <div class="warehouse-item__product-info">
          <a class="warehouse-item__product-name" href="#">{{
            product.name
          }}</a>
          <span class="article">Артикул WB : {{ product.articleWB }}</span>
        </div>
        <div class="warehouse-item__product-buttons">
          <LinkIcon />
          <InfoIcon />
        </div>
      </div>
    </td>
    <td>
      <BalanceItem v-bind="balanceWB" />
    </td>
    <td>
      <BalanceItem v-bind="balanceSupplier" />
    </td>
    <td class="warehouse-item__mystock">
      <BalanceItem v-bind="balanceMyStock" />
    </td>
    <td>
      <BalanceItem v-bind="balanceAll" />
    </td>
    <td>
      <BalanceItem v-bind="balanceInPath" :show-days="false" />
    </td>
    <td>
      <PerDayItem :items-per-day="orderInOneDay" />
    </td>
    <td class="warehouse-item__changes-history">
      <SimpleButton v-if="!showSize"> Посмотреть</SimpleButton>
    </td>
  </tr>
  <tr v-if="sizeRange" class="warehouse-item warehouse-item--bottom">
    <td colspan="100%">
      <SizeRange :sizesObj="sizeRange" v-model:show-sizes="showSize"/>
    </td>
  </tr>
</template>

<script setup lang="ts">
import InfoIcon from "../../../assets/icons/info.svg";
import LinkIcon from "../../../assets/icons/link.svg";
import BalanceItem from "./BalanceItem.vue";
import PerDayItem from "./PerDayItem.vue";
import SizeRange from "./SizeRange.vue";
import SimpleButton from "../../../components/form/SimpleButton.vue";
import { ProductStockData } from "../warehouse.i";
import { ref } from "vue";

defineProps<ProductStockData>();

const showSize = ref(false)
</script>

<style lang="scss" scoped>
tr.warehouse-item {
  &--top {
    > td {
      padding-bottom: 0;
      border-width: 1px 0 0 0;

      &:first-child {
        border-radius: 4px 0 0 0;
        border-width: 1px 0 0 1px;
      }
      &:last-child {
        border-radius: 0 4px 0 0;
        border-width: 1px 1px 0 0;
      }
    }
  }

  &--bottom {
    > td {
      &:first-of-type {
        padding-top: 0;
        border-radius: 0 0 4px 4px;
        border-width: 0 1px 1px 1px;
      }
    }
  }
}
.warehouse-item {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--article-color);
  position: relative;

  td {
    vertical-align: top;

    padding-top: 20px;
    padding-bottom: 20px;
    border: 1px solid var(--btn-border-color);

    border-width: 1px 0 1px 0;

    &:first-child {
      border-width: 1px 0 1px 1px;
    }

    &:last-child {
      border-width: 1px 1px 1px 0;
    }
  }

  &__changes-history {
    .simple-button {
      margin-bottom: auto;
    }
  }

  &__product {
    display: flex;
    align-items: center;

    &-info {
      display: flex;
      flex-direction: column;
      gap: 4px;

      margin-right: 9px;
    }

    &-name {
      font-size: 13px;
      line-height: 18px;
      color: var(--btn-bg-color);

      width: 100%;
      max-width: 250px;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    &-img {
      width: 35px;
      height: 46px;
      align-self: start;

      margin-right: 16px;
    }

    &-buttons {
      display: flex;
      align-items: center;
      min-width: 40px;
      justify-content: space-between;
    }
  }

  .number-input {
    font-size: 14px;
    line-height: 15px;
  }

  .size-range {
    margin-top: 12px;
  }
}
</style>
