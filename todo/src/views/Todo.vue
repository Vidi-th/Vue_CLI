<template>
    <div id = Todo>
        <Title/>
        <todo-list/>
    </div>
</template>

<script>
import Title from '@/components/Title.vue'
import TodoList from '@/components/TodoList.vue'

export default {
    components: { TodoList, Title },
    
}
</script>

<style scoped>

</style>