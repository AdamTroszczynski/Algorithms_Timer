<template>
  <div class="relative flex flex-grow">
    <div
      class="relative z-10 flex h-full flex-grow flex-col items-center justify-between px-1 after:absolute after:left-[100%] after:block after:h-full after:w-px after:bg-decorator after:content-['']"
    >
      <h3 class="text-[0.625rem] font-medium text-grey sm:text-xs md:text-sm">
        {{ name }}
      </h3>
      <input
        @focus="withInfo ? (isOpen = !isOpen) : ''"
        @blur="withInfo ? (isOpen = false) : ''"
        @input="emitInputValue"
        v-model="displayValue"
        type="number"
        class="mb-1 max-w-[60px] cursor-pointer bg-transparent text-center text-sm font-semibold text-black [appearance:textfield] focus:outline-0 sm:text-base md:mb-2 md:max-w-[120px] md:text-lg [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <ArrowIcon
        v-if="withInfo"
        class="absolute top-[100%] transition-all duration-300 ease-in-out sm:top-[90%]"
        :class="isOpen ? 'rotate-180' : ''"
      />
    </div>
    <div
      v-if="isOpen"
      class="absolute top-[130%] z-[-1] h-[50px] w-[100%] rounded-bl-full rounded-br-full bg-white px-5 text-center text-[0.6rem] font-normal text-grey shadow-lg sm:top-[125%] sm:text-sm md:top-[115%]"
    >
      {{ infoMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  withInfo: {
    type: Boolean,
    default: false,
  },
  infoMessage: {
    type: String,
    required: false,
  },
});

const isOpen: Ref<boolean> = ref(false);

const displayValue: Ref<number> = ref(props.value);

const emit = defineEmits<{
  // Emit value from input
  (e: 'inputEvent', value: number): void;
}>();

/** Emit value if user use input */
const emitInputValue = (): void => emit('inputEvent', displayValue.value);
</script>
