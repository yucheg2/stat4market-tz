<template>
  <table class="size-table">
    <thead>
      <tr>
        <th>Размер</th>
        <th>Остаток на WB</th>
        <th>Хватит на</th>
        <th>Остаток у поставщика</th>
        <th>Хватит на</th>
        <th>Остаток мой склад</th>
        <th>Хватит на</th>
        <th>Остаток всего</th>
        <th>Хватит на</th>
        <th>В пути от производителя</th>
        <th>Скорость заказов</th>
        <th>История изменения</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="sizeobj of sizes">
        <td>
          <div class="size-table__size">
            {{ sizeobj.size }}
          </div>
        </td>
        <td>
          <div class="size-table__balance">
            {{ sizeobj.balanceWB.count }} шт.
          </div>
        </td>
        <td>
          <div class="size-table__balance">
            {{ numWordDays(sizeobj.balanceWB.enoughFor) }}
          </div>
        </td>
        <td>
          <div class="size-table__balance">
            {{ sizeobj.balanceSupplier.count }} шт.
          </div>
        </td>
        <td>
          <div class="size-table__balance">
            {{ numWordDays(sizeobj.balanceSupplier.enoughFor) }}
          </div>
        </td>

        <td>
          <div class="size-table__balance">
            <NumberInput :model-value="sizeobj.balanceMyStock.count" :postscript="'шт.'" />
          </div>
        </td>
        <td>
          <div class="size-table__balance">
            {{ numWordDays(sizeobj.balanceMyStock.enoughFor) }}
          </div>
        </td>

        <td>
          <div class="size-table__balance">
            {{ sizeobj.balanceAll.count }} шт.
          </div>
        </td>
        <td>
          <div class="size-table__balance">
            {{ numWordDays(sizeobj.balanceAll.enoughFor) }}
          </div>
        </td>

        <td>
          <div class="size-table__balance">
            <NumberInput :model-value="sizeobj.balanceInPath.count" :postscript="'шт.'"/>
          </div>
        </td>
        <td>
          <div class="size-table__balance">
            {{ sizeobj.orderInOneDay }} шт. / день
          </div>
        </td>
        <td>
          <SimpleButton> Посмотреть</SimpleButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import NumberInput from "../../../components/form/NumberInput.vue";
import SimpleButton from "../../../components/form/SimpleButton.vue";
import { numWord } from "../../../utils/numWorld";
import { SizeRange } from "../warehouse.i";

defineProps<{ sizes: SizeRange }>();

const numWordDays = (value: number) => {
  return value + " " + numWord(value, ["день", "дня", "дней"]);
};
</script>

<style lang="scss">
.size-table {
  border-spacing: 0;
  th {
    text-align: left;
    padding: 8px 16px;

    font-size: 12px;
    line-height: 16px;
    color: #999999;
  }

  tbody {
    td {
      border: solid #ebebeb;
      background-color: var(--content-bg-color);
      border-width: 1px 0;
      border-radius: 0;
      padding: 12px 16px;

      &:first-child {
        border-left-width: 1px;
      }
    }
  }

  &__size {
    background: #ea5dbb;
    padding: 2px 28px;
    margin-right: 26px;
    border-radius: 4px;

    color: var(--white-color);
    font-size: 13px;
    line-height: 20px;
  }

  &__balance {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    padding: 2px 0;
  }
}
</style>
