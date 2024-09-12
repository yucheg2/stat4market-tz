<template>
  <table class="warehouse-table">
    <thead class="warehouse-table__head">
      <tr>
        <th>Товар</th>
        <th>
          <div class="warehouse-table__sorts">
            <Sort>Остаток на WB </Sort>
            <Sort :show-question="false">Хватит на складе </Sort>
          </div>
        </th>
        <th>
          <div class="warehouse-table__sorts">
            <Sort>Остаток у поставщиков </Sort>
            <Sort :show-question="false">Хватит на складе </Sort>
          </div>
        </th>
        <th>
          <div class="warehouse-table__sorts">
            <Sort>Остаток мой склад</Sort>
            <Sort :show-question="false">Хватит на складе </Sort>
          </div>
        </th>
        <th>
          <div class="warehouse-table__sorts">
            <Sort :show-question="false">Остаток всего</Sort>
            <Sort :show-question="false">Хватит на складе </Sort>
          </div>
        </th>
        <th>
          <Sort class="warehouse-table__in-path">В пути от производителя</Sort>
        </th>
        <th>
          <div class="warehouse-table__sorts">
            <Sort :show-question="false">Скорость заказов</Sort>
            <SortInput />
          </div>
        </th>
        <th>
          <span class="warehouse-table__change-history">История изменения</span>
        </th>
      </tr>
    </thead>
    <tbody class="warehouse-table__body">
      <template v-for="product of mockData" :key="product.id">
        <WarehouseTableItam v-bind="product" />
      </template>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import Sort from "../../../components/Sort/Sort.vue";
import SortInput from "../../../components/Sort/SortInput.vue";
import { ProductStockData } from "../warehouse.i";
import WarehouseTableItam from "./WarehouseTableItam.vue";

const mockData: ProductStockData[] = [
  {
    id: 1,
    product: {
      img: "/imgs/img.png",
      name: "Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированные цветы,",
      articleWB: "9619790",
    },
    balanceWB: {
      count: 55475,
      editable: true,
    },
    balanceSupplier: {
      count: 1000,
      editable: false,
    },
    balanceMyStock: {
      count: 11453,
      editable: true,
    },
    balanceAll: {
      count: 142412,
      editable: false,
    },
    balanceInPath: {
      count: 453,
      editable: true,
    },
    orderInOneDay: 5,
  },
  {
    id: 2,
    product: {
      img: "/imgs/img.png",
      name: "Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированные цветы,",
      articleWB: "9619790",
    },
    balanceWB: {
      count: 55475,
      editable: true,
    },
    balanceSupplier: {
      count: 1000,
      editable: false,
    },
    balanceMyStock: {
      count: 11453,
      editable: false,
    },
    balanceAll: {
      count: 142412,
      editable: false,
    },
    balanceInPath: {
      count: 453,
      editable: true,
    },
    orderInOneDay: 5,
    sizeRange: [
      {
        size: 38,
        balanceWB: {
          count: 41,
          editable: false,
          enoughFor: 2,
        },

        balanceSupplier: {
          count: 41,
          editable: false,
          enoughFor: 2,
        },
        balanceMyStock: {
          count: 41,
          editable: true,
          enoughFor: 2,
        },
        balanceAll: {
          count: 41,
          editable: false,
          enoughFor: 2,
        },
        balanceInPath: {
          count: 224,
          editable: true,
        },
        orderInOneDay: 5,
      },
      {
        size: 42,
        balanceWB: {
          count: 90,
          editable: false,
          enoughFor: 4,
        },

        balanceSupplier: {
          count: 90,
          editable: false,
          enoughFor: 4,
        },
        balanceMyStock: {
          count: 90,
          editable: true,
          enoughFor: 4,
        },
        balanceAll: {
          count: 90,
          editable: false,
          enoughFor: 4,
        },
        balanceInPath: {
          count: 223,
          editable: true,
        },
        orderInOneDay: 5,
      },
      {
        size: 46,
        balanceWB: {
          count: 114,
          editable: false,
          enoughFor: 5,
        },

        balanceSupplier: {
          count: 114,
          editable: false,
          enoughFor: 5,
        },
        balanceMyStock: {
          count: 114,
          editable: true,
          enoughFor: 5,
        },
        balanceAll: {
          count: 114,
          editable: false,
          enoughFor: 5,
        },
        balanceInPath: {
          count: 223,
          editable: true,
        },
        orderInOneDay: 5,
      },
      {
        size: 44,
        balanceWB: {
          count: 417,
          editable: false,

          enoughFor: 10,
        },

        balanceSupplier: {
          count: 417,
          editable: false,
          enoughFor: 10,
        },
        balanceMyStock: {
          count: 417,
          editable: true,
          enoughFor: 10,
        },
        balanceAll: {
          count: 417,
          editable: false,
          enoughFor: 10,
        },
        balanceInPath: {
          count: 223,
          editable: true,
        },
        orderInOneDay: 5,
      },
      {
        size: 40,
        balanceWB: {
          count: 490,
          editable: false,
          enoughFor: 13,
        },

        balanceSupplier: {
          count: 490,
          editable: false,
          enoughFor: 13,
        },
        balanceMyStock: {
          count: 490,
          editable: true,
          enoughFor: 13,
        },
        balanceAll: {
          count: 490,
          editable: false,
          enoughFor: 13,
        },
        balanceInPath: {
          count: 223,
          editable: true,
        },
        orderInOneDay: 5,
      },
    ],
  },
  {
    id: 2,
    product: {
      img: "/imgs/img.png",
      name: "Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированные цветы,",
      articleWB: "9619790",
    },
    balanceWB: {
      count: 55475,
      editable: true,
    },
    balanceSupplier: {
      count: 1000,
      editable: false,
    },
    balanceMyStock: {
      count: 11453,
      editable: true,
    },
    balanceAll: {
      count: 142412,
      editable: false,
    },
    balanceInPath: {
      count: 453,
      editable: true,
    },
    orderInOneDay: 5,
    sizeRange: [
      {
        size: 38,
        balanceWB: {
          count: 41,
          editable: false,
          enoughFor: 2,
        },

        balanceSupplier: {
          count: 41,
          editable: false,
          enoughFor: 2,
        },
        balanceMyStock: {
          count: 41,
          editable: true,
          enoughFor: 2,
        },
        balanceAll: {
          count: 41,
          editable: false,
          enoughFor: 2,
        },
        balanceInPath: {
          count: 224,
          editable: true,
        },
        orderInOneDay: 5,
      },
      {
        size: 42,
        balanceWB: {
          count: 90,
          editable: false,
          enoughFor: 4,
        },

        balanceSupplier: {
          count: 90,
          editable: false,
          enoughFor: 4,
        },
        balanceMyStock: {
          count: 90,
          editable: true,
          enoughFor: 4,
        },
        balanceAll: {
          count: 90,
          editable: false,
          enoughFor: 4,
        },
        balanceInPath: {
          count: 223,
          editable: true,
        },
        orderInOneDay: 5,
      },
      {
        size: 46,
        balanceWB: {
          count: 114,
          editable: false,
          enoughFor: 5,
        },

        balanceSupplier: {
          count: 114,
          editable: false,
          enoughFor: 5,
        },
        balanceMyStock: {
          count: 114,
          editable: true,
          enoughFor: 5,
        },
        balanceAll: {
          count: 114,
          editable: false,
          enoughFor: 5,
        },
        balanceInPath: {
          count: 223,
          editable: true,
        },
        orderInOneDay: 5,
      },
      {
        size: 44,
        balanceWB: {
          count: 417,
          editable: false,

          enoughFor: 10,
        },

        balanceSupplier: {
          count: 417,
          editable: false,
          enoughFor: 10,
        },
        balanceMyStock: {
          count: 417,
          editable: true,
          enoughFor: 10,
        },
        balanceAll: {
          count: 417,
          editable: false,
          enoughFor: 10,
        },
        balanceInPath: {
          count: 223,
          editable: true,
        },
        orderInOneDay: 5,
      },
      {
        size: 40,
        balanceWB: {
          count: 490,
          editable: false,
          enoughFor: 13,
        },

        balanceSupplier: {
          count: 490,
          editable: false,
          enoughFor: 13,
        },
        balanceMyStock: {
          count: 490,
          editable: true,
          enoughFor: 13,
        },
        balanceAll: {
          count: 490,
          editable: false,
          enoughFor: 13,
        },
        balanceInPath: {
          count: 223,
          editable: true,
        },
        orderInOneDay: 5,
      },
    ],
  },
];
</script>

<style lang="scss">
.warehouse-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  & > thead > tr,
  & > tbody > tr {
    > * {
      text-align: start;
      &:first-child {
        padding-left: 20px;
        border-radius: 4px 0 0 4px;
      }
      &:last-child {
        border-radius: 0 4px 4px 0;
        padding-right: 20px;
      }
    }
  }

  td {
    padding-right: 16px;
  }

  &__head {
    color: var(--white-color);
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;

    th {
      background-color: var(--btn-bg-color);
      padding: 7px 16px 7px 0;
    }
  }

  &__sorts {
    .sort:first-child {
      margin-bottom: 2px;
    }
  }

  &__in-path {
    span {
      max-width: 92px;
    }
  }

  &__change-history {
    max-width: 85px;
    display: block;
  }
}
</style>
