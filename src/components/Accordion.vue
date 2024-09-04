<template>
    <div class="mb-[30px] md:mb-[50px]">
        <div class="flex justify-between items-center cursor-pointer bg-white w-full rounded-[20px] shadow-for-card 
            mb-[20px] md:mb-[31px] py-[16px] pl-[22px] pr-[26px] sm:py-[21px] sm:pl-[34px] sm:pr-[43px]" 
            @click="toggleAccordion">
            <h3 class="text-[20px] sm:text-[25px] md:text-[30px] text-blue font-bold leading-[38px] sm:leading-[45px] font-raleway">{{ title }}</h3>
            <svg
                :class="{'transform rotate-180': isOpen}"
                class="w-6 sm:w-8 h-6 sm:h-8 transition-transform duration-200 text-blue opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>
        <div v-if="isOpen" class="pl-[20px] sm:pl-[55px] md:pl-[79px]">
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
  