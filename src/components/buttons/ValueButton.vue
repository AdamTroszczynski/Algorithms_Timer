<template>
  <div class="relative flex flex-grow">
    <button
      @click="isOpen = !isOpen"
      class="relative z-10 flex h-full flex-grow flex-col items-center justify-between after:absolute after:left-[100%] after:block after:h-full after:w-px after:bg-decorator after:content-['']"
    >
      <h3 class="text-[0.625rem] font-medium text-grey sm:text-xs md:text-sm">
        {{ name }}
      </h3>
      <h2
        class="mb-1 text-sm font-semibold text-black sm:text-base md:mb-2 md:text-lg"
      >
        {{ value }}
      </h2>
      <ArrowIcon
        class="absolute top-[100%] transition-all duration-300 ease-in-out"
        :class="isOpen ? 'rotate-180' : ''"
      />
    </button>
    <div
      v-if="isOpen"
      class="absolute top-[120%] z-[-1] h-[30px] w-[100%] rounded-bl-full rounded-br-full bg-white px-5 shadow-lg"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const isOpen: Ref<boolean> = ref(true);
</script>
