<template>
    <button :class="`icon-button icon-button--${type}`">
        <slot/>
    </button>
</template>

<script setup lang="ts">
withDefaults( defineProps<{
    type?: 'primary' | 'outlined'
}>(), {
    type: 'primary'
})
</script>

<style lang="scss">
.icon-button {
    padding: 4px;
    border:none;
    border-radius: 4px;
    background: none;
    cursor: pointer;

    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    &--primary {
        background-color: var(--btn-bg-color);
    }

    &--outlined {
        border: 1px solid var(--btn-border-color);
    }
}
</style>