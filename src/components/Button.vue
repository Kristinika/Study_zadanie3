<template>
    <button 
        class="bg-white bg-opacity-30 rounded-[30px] shadow-lg shadow-for-button py-[15px] px-[44px]"
        @click="$emit('click')"
    >
        <p class="text-[#0B0590]">{{ description }}</p>
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    description: String,
});
</script>

<style scoped>
</style>
