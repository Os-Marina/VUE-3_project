
<template>
  <!-- <input :value="task" @input="onInput"> -->
    <!-- <input v-model="person.name"> -->
   <!-- <span>{{ person.name }} -> {{ normalazeName}}</span> -->
  <input v-model="taskTitle">
  <button @click="addTask">Add task</button>
  <div class="task-list">
    <template v-for="task in tasks">
      <div 
        v-if="showOnlyCompleted ? task.complete : false"
        class="task"
        :class="[{'task--complete' : task.complete}]"
      >
        {{ task.title }}
        <button @click="task.complete = !task.complete">
          complete
        </button>
      </div>
    </template>
  </div>

  <!-- <div v-for="value, key in {name: 'Den', wallet: 'sdfsdfsf'}">
    {{ key }} " {{ value }}"
  </div> -->
  <div>
    <input v-model="showOnlyCompleted" type="checkbox" >
    Show only completed
  </div>

</template>

<script setup lang="ts">
import { ref, computed } from "vue";

type Task = {title: string, complete: boolean}
const taskTitle = ref('')
const showOnlyCompleted = ref('false')
const tasks = ref([] as Task[])


function addTask(){
  tasks.value.push({title: taskTitle.value, complete: true})
  taskTitle.value = ''
}
// function complete(task: ref<Task>){

// }
/* 
// function onInput(event: Event){
//   task.value = (event.target as HTMLInputElement).value
// }
*/
// const normalazeName = computed(() => person.name.toUpperCase())
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

<style>
.task-list{
  display: flex;
  flex-direction: column;
}
.task--complete{
  text-decoration: line-through;
}
</style>
