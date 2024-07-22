<template>
    <div>
        <button @click="$emit('my-click')">
            <slot>
                Button 
            </slot>
            {{ tags }}
        </button>
        <input 
            v-model="proxyName" 
            ref="input" 
            type="text"
        > 
        <!-- <input v-model="proxyName" ref="input" type="text">  -->
        <!-- <input :value="tags" type="text" @input="emit('update:tags', ($event.target as HTMLInputElement).value)">  -->
    </div>
    <!-- <button @click="emit('my-click')"> -->
    <!-- <button :title="props.title">{{ props.title }}</button> -->

</template>

<script  lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import type { User } from './type';


// import {User} from '@/components/type'

const props = withDefaults(
    defineProps<{
        title?: string, //в данном случае мы не можем указать кастомную функцию validator
        tags: string[],
        // modelValue: string,
    }>(), 
    {title: "Button"}
)
//вариант вида JS
const emit = defineEmits<{
    'my-click': [],
    'update:tags': [string[]]
    // 'update:modelValue': [string]
}>()

const proxyName = computed({
    get() {
        return props.tags
    },
    set(value: string) {
        props.tags.push(value)
        emit('update:tags', props.tags)
    }
})

const input = ref()
defineExpose({
    input
})

// onMounted(() => {
//     input.value.forEach(item => {
//         item.style.border = '4px solid blue'
//     });
// }) 
// onMounted(() => {
//     input.value.focus()
// }) 

// const theme = inject('theme')
/*
//через максрос emit
defineEmits<{
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