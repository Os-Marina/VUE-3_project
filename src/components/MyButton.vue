<template>
    <!-- <button :title="props.title">{{ props.title }}</button> -->
    <button @click="$emit('my-click')">
    <!-- <button @click="emit('my-click')"> -->
        <slot />
    </button>
</template>

<script  lang="ts" setup>
import { inject } from 'vue';
import type { User } from './type';


// import {User} from '@/components/type'

const props = withDefaults(
    defineProps<{
        title?: string //в данном случае мы не можем указать кастомную функцию validator
    }>(), 
    {title: "Button"}
)
//через максрос emit
defineEmits<{
    'my-click': []
}>()

const theme = inject('theme')
/*
//вариант вида JS
const emit = defineEmits<{
    'my-click': []
}>()
*/
/*
const props = withDefaults(
    defineProps<{
        title?: string //в данном случае мы не можем указать кастомную функцию validator
    }>(), 
    {title: "Button"}
)

//вариант вида JS
const emit = defineEmits<{
    click: []
}>()
// const emit = defineEmits(['click'])
*/

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