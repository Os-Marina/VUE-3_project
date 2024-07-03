<template>
  <input v-model="person.name">
   <span>{{ person.name }} -> {{ normalazeName}}</span>
</template>

<script setup>
import { ref, computed, reactive } from "vue";

const person = reactive({name: 'Denis'})
const normalazeName = computed(() => person.name.toUpperCase())
/*  
// const count = ref(0)
// const computedCount = ref(0)

// const computedCount = computed (() => {
//   if (count.value % 2){
//     return title.value.toUpperCase()
//   } return title.value.toLowerCase()
//   // return count.value++
// })

// watchEffect(() => {
//   computedCount.value = count.value + 1
// })

// watch (() => count.value, (num) => {
//   computedCount.value = num + 1
// }) 
*/



</script>

<style lang="scss" scoped>

</style>
