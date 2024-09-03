<template>
    <div 
      class="bg-white bg-opacity-40 rounded-[40px] overflow-hidden font-raleway font-normal text-start 
        shadow-lg shadow-for-card border-t-2 border-white border-opacity-10 cursor-pointer"
      @click="goToDetail"
    >
      <img :src="image" alt="Card Image" class="w-full h-48 object-cover" />
      <div class="px-[36px] pt-[22px] pb-[33px]">
        <div class="flex justify-between text-blue text-[15px]">
            <div class="flex space-x-[18px]">
                <div>{{ sort }}</div>
                <div>{{ category }}</div>    
            </div>
            <div class="flex">
                <div class="text-gray">{{ date }}</div>
            </div>
        </div>
        <div class="flex justify-between items-end">
            <h3 class="text-[20px] font-medium leading-[30px] mt-[19px]">{{ title }}</h3>
            <svg class="w-9 h-auto mb-2" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64644L20.1716 0.464464C19.9763 0.269202 19.6597 0.269202 19.4645 0.464464C19.2692 0.659727 19.2692 0.976309 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.73079 19.9763 7.73079 20.1716 7.53553L23.3536 4.35355ZM4.37114e-08 4.5L23 4.5L23 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#1D1D1D"/>
            </svg>
        </div>
        <p class="text-[15px] leading-[22.5px] text-gray mt-[10px]">{{ description }}</p>
      </div>
    </div>
</template>
  
<script setup>
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';
  
  const props = defineProps({
      id: Number,
      image: String,
      sort: String,
      category: String,
      date: String,
      title: String,
      description: String,
  });
  
  const router = useRouter();
  
  const goToDetail = () => {
      router.push({ name: 'Detail', params: { id: props.id } });
  };
</script>
  
<style scoped>
</style>
  