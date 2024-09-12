<template>
  <div class="warehouse-page">
    <header class="warehouse-page__header">
      <h1 class="page-heading">Мой склад</h1>
      <IconButton>
        <template #icon>
          <SettingIcon />
        </template>
        <template #content> Настройки отчёта </template>
      </IconButton>
    </header>
    <main class="warehouse-page__content">
      <h2 class="product-count">
        Товары: <b>{{ productCount }} шт.</b>
      </h2>
      <WarehouseTable />
    </main>
  </div>
</template>

<script setup lang="ts">
import IconButton from "../../components/form/WithIconButton.vue";
import SettingIcon from "../../assets/icons/settings.svg";
import WarehouseTable from "./components/WareHouseTable.vue";

const productCount = 134;
</script>

<style lang="scss">
.warehouse-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  &__content {
    padding: 30px;
    flex-grow: 1;

    background-color: var(--content-bg-color);

    border-radius: 8px;

    .product-count {
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;

      margin-bottom: 8px;

      b {
        color: var(--pink-color);
      }
    }
  }
}
</style>
