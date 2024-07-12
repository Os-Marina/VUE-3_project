
<template>
  <!-- <input :value="task" @input="onInput"> -->
    <!-- <input v-model="person.name"> -->
   <!-- <span>{{ person.name }} -> {{ normalazeName}}</span> -->
  <input v-model="taskTitle">
  <MyButton @my-click="addTask">Add Task </MyButton>
  <div class="task-list">
    <template 
      v-for="task in tasks" 
      :key="task.id">
        <div
          v-if="Object.values(showOnlyCompleted).find(item => item === 'complete') ? task.complete : true"
          class="task"
          :class="{'task--complete' : task.complete}"
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
    <div v-for="filter in ['complete', 'uncompleted', 'last', 'today']" :key="filter">
      <input v-model="showOnlyCompleted" type="checkbox" :value="filter">
      <span>
        <!-- Show only completed -->
        {{ filter }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, computed } from "vue";
import MyButton from "@/components/MyButton.vue"

type Task = {title: string, complete: boolean, id: number}
let id = 0
const taskTitle = ref('')
let color = 'blue'
const showOnlyCompleted = ref([])
// const showOnlyCompleted = ref('')
const tasks = ref([] as Task[])

function addTask(){
  tasks.value.push({title: taskTitle.value, complete: false, id: id++})
  taskTitle.value = ''
  console.log(tasks);
}

provide('theme', 'dark')



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




//color: v-bind(color);
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
