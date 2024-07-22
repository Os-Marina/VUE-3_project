<template>
  <div class="task-list">
    <template 
      v-for="task in tasks" 
      :key="task.id">
      <slot :task="task" title="A " />
    </template>
  </div>
</template>

<script setup lang="ts">
type Task = {title: string, complete: boolean, id: number}
defineProps<{
    tasks: Task[]
}>()

</script>

<style lang="css">

</style>