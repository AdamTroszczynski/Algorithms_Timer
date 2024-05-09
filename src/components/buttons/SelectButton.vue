<template>
  <div class="relative flex flex-grow">
    <button
      onclick="my_modal_2.showModal()"
      class="relative z-10 flex h-full flex-grow flex-col items-center justify-between px-1 after:absolute after:left-[100%] after:block after:h-full after:w-px after:bg-decorator after:content-['']"
    >
      <h3 class="text-[0.625rem] font-medium text-grey sm:text-xs md:text-sm">
        {{ name }}
      </h3>
      <h2
        class="mb-1 bg-transparent text-center text-sm font-semibold text-black sm:text-base md:mb-2 md:text-lg"
      >
        {{ displayValue }}
      </h2>
    </button>
  </div>
  <dialog id="my_modal_2" class="modal">
    <div class="modal-box bg-white p-3 shadow-lg md:px-6">
      <h3 class="text-base font-semibold text-black sm:text-lg">
        {{ modalName }}
      </h3>
      <ul
        class="gap flex w-full flex-wrap justify-center gap-3 px-1 pt-3 text-sm text-black sm:gap-6 md:gap-8 lg:gap-12"
      >
        <li
          v-for="option in options"
          onclick="my_modal_2.close()"
          @click="emitSelectedValue(option.toString())"
          class="cursor-pointer md:text-base"
        >
          {{ option }}
        </li>
      </ul>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  modalName: {
    type: String,
    required: true,
  },
  options: {
    type: Array<String>,
    required: true,
  },
});

const displayValue: Ref<string> = ref(props.value);

const emit = defineEmits<{
  // Emit selected value
  (e: 'selectEvent', value: string): void;
}>();

/** Emit value when user select value */
const emitSelectedValue = (value: string) => {
  displayValue.value = value;
  emit('selectEvent', value);
};
</script>
