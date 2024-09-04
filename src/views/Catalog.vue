<template>
    <div class="bg-custom-bg bg-cover min-h-screen pt-[70px] md:pt-[139px] px-[30px] md:px-[50px] lg:px-[90px] xl:px-[180px] 2xl:px-[280px]">
        <h1 class="text-[36px] md:text-[48px] text-center text-blue font-roboto font-normal">БЛОГ</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px] pt-[40px] md:pt-[68px] pb-[60px] md:pb-[90px]">
        <Card
            v-for="(card, index) in cards"
            :key="index"
            :id="card.id"
            :image="card.image"
            :sort="card.sort"
            :category="card.category"
            :date="card.date"
            :title="card.title"
            :description="card.description"
        />
        </div>
        <div class="text-center text-[15px] md:text-[16px] font-raleway font-bold pb-[50px] md:pb-[77px]">
            <Button
                v-for="(button, index) in buttons"
                :key="index"
                :description="button.description"
            />
        </div>
    </div>
    
</template>
  
<script setup>
  import Card from '../components/Card.vue';
  import Button from '../components/Button.vue';

  const buttons = [
    {
        description: 'Загрузить еще',
    }
  ]

  const cards = [
    {
        id: 1,
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        id: 2,
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        id: 3,
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        id: 4,
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        id: 5,
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        id: 6,
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        id: 7,
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        id: 8,
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        id: 9,
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
  ];
</script>
  
<style scoped>
</style>
  