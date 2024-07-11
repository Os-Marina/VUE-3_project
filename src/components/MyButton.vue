<template>
    <button :title="props.title">{{ props.title }}</button>
</template>

<script  lang="ts" setup>

const props = defineProps({
    title: String
})
</script>

<style lang="css">

</style>