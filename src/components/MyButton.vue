<template>
    <button :title="props.title">{{ props.title }}</button>
</template>

<script  lang="ts" setup>
import type { User } from './type';


// import {User} from '@/components/type'


const props = withDefaults(
    defineProps<{
        title?: string //в данном случае мы не можем указать кастомную функцию validator
    }>(), 
    {title: "Button"})
/*
const props = defineProps<{
    title?: string //в данном случае мы не можем указать кастомную функцию validator
    user: User
}>()
*/
/*
({
    
    //объектный вариант
    title: {
        type: String,
        // type: Object as PropType<User>, //User ипользуети типы их файла type.ts
        // default: 'Button' //указывается значение по умолчанию
        required: true, //говорит о том, что мы обязаны указать атрибут
        validator: (text:string) => text.length > 0
    }
    
})
*/
</script>

<style lang="css">

</style>