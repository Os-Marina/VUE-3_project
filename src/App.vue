
<template>
  <!-- <input :value="task" @input="onInput"> -->
    <!-- <input v-model="person.name"> -->
   <!-- <span>{{ person.name }} -> {{ normalazeName}}</span> -->
  <input v-model="taskTitle">
  <MyButton 
    ref="button"
    v-model:tags="additional" 
    @my-click="addTask"
  >Add Task 
  </MyButton>
  <TodoList :tasks="tasks">
    <template #default="{ task, title }">
      <div
        class="task"
      >
        {{ task.title }}
        {{ title }}
        <button @click="task.complete = !task.complete">
          complete
        </button>
      </div>
    </template>
  </TodoList>
  <!-- <div v-for="value, key in {name: 'Den', wallet: 'sdfsdfsf'}">
    {{ key }} " {{ value }}"
  </div> -->
  <!-- <div>
    <div v-for="filter in ['complete', 'uncompleted', 'last', 'today']" :key="filter">
      <input v-model="showOnlyCompleted" type="checkbox" :value="filter">
      <span>
        Show only completed
        {{ filter }}
      </span>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { ref, provide, computed, onMounted } from "vue";
import MyButton from "@/components/MyButton.vue"
import TodoList from "@/components/TodoList.vue";

type Task = {title: string, complete: boolean, id: number}
let id = 0
const taskTitle = ref('')
let color = 'blue'
// const showOnlyCompleted = ref([])
const showOnlyCompleted = ref('')
const tasks = ref([] as Task[])

function addTask(){
  tasks.value.push({title: taskTitle.value, complete: false, id: id++})
  taskTitle.value = ''
  console.log(tasks);
}
const additional = ref([])
const button = ref()

onMounted(() => {
  console.log(button.value.input.focus());
  
})

// provide('theme', 'dark')



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
