<template>
  <div @click="focus" class="number-input">
    <div class="number-input__input">
      <p
        ref="inputRef"
        class="number-input__content dots-underline"
        @keypress="isNumber"
        :contenteditable="editable"
        @keydown.enter="save"
      >
        {{ showedText }}
      </p>
    </div>
    <div v-show="editable" class="number-input__buttons">
      <IconButton @click.stop="save">
        <CheckIcon />
      </IconButton>
      <IconButton @click.stop="cancel" type="outlined">
        <CancelIcon />
      </IconButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import CheckIcon from "../../assets/icons/check.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import IconButton from "./IconButton.vue";
import { addSpaceInNumber } from "../../utils/addSpaceInNumber";

const props = defineProps<{
  postscript: string;
}>();

const inputRef = ref<any>(null);

const modelValue = defineModel<number>({ default: 0 });
let prevValue: number = modelValue.value;

const editable = ref(false);

const txtValue = computed(
  () => `${addSpaceInNumber(modelValue.value)} ${props.postscript}`
);

const showedText = computed(() =>
  editable.value ? modelValue.value : txtValue.value
);

const focus = async () => {
  prevValue = modelValue.value;

  editable.value = true;
  const range = document.createRange();
  const selection = window.getSelection();

  await nextTick();
  range.selectNodeContents(inputRef.value);
  selection?.removeAllRanges();
  selection?.addRange(range);
};

const blur = () => {
  editable.value = false;
};

const save = () => {
  modelValue.value = inputRef.value.innerText
  blur();
};

const cancel = () => {
  modelValue.value = prevValue;
  blur();
};

const isNumber = (event: KeyboardEvent) => {
  const keyPressed: string = event.key;

  if (!Number(keyPressed)) {
    event.preventDefault();
  }
};
</script>

<style lang="scss">
.number-input {
  color: var(--btn-bg-color);
  background-color: var(--white-color);

  font-size: 13px;
  font-weight: 400;

  border-radius: 4px;

  padding: 2px 4px;

  display: flex;
  align-items: center;
  height: 20px;
  gap: 8px;

  &__content {
    &:focus {
      outline: 0px solid transparent;
    }
  }

  &__buttons {
    display: flex;
    gap: 4px;
  }
}
</style>
