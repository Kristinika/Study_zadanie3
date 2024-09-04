<template>
    <div class="mb-[50px]">
        <div class="flex justify-between items-center py-[21px] pl-[34px] pr-[43px] cursor-pointer bg-white w-full rounded-[20px] shadow-for-card mb-[31px]" 
            @click="toggleAccordion">
            <h3 class="text-[30px] text-blue font-bold leading-[45px] font-raleway">{{ title }}</h3>
            <svg
                :class="{'transform rotate-180': isOpen}"
                class="w-8 h-8 transition-transform duration-200 text-blue opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>
        <div v-if="isOpen" class="p-4">
            <slot />
        </div>
    </div>
</template>
  
<script setup>
    import { ref } from 'vue';
    import { defineProps } from 'vue';

    const isOpen = ref(false);
    function toggleAccordion() {
        isOpen.value = !isOpen.value;
    }

    const props = defineProps({
        title: String,
    });
</script>

<style scoped>
</style>
  