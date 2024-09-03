<template>
    <h1 class="text-[48px] text-center text-blue font-roboto font-normal">БЛОГ</h1>
    <div class="grid grid-cols-3 gap-[22px] pt-[68px] pb-[90px]">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :image="card.image"
        :sort="card.sort"
        :category="card.category"
        :date="card.date"
        :title="card.title"
        :description="card.description"
      />
    </div>
    <div class="text-center text-base font-raleway font-bold">
        <Button
            v-for="(button, index) in buttons"
            :key="index"
            :description="button.description"
        />
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
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },{
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
        image: '/src/assets/kote.jpg',
        sort: 'Сайты',
        category: 'Бизнес',
        date: 'Авг 2023',
        title: 'На что обратить внимание при разработке сайта визитки?',
        description: 'Как понять, что нужен сайт? Какую информацию размещать? Как провести анализ конкурентов? Отвечаем в статье.',
    },
    {
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
  