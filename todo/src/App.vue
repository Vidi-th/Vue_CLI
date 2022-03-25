<template>
  <div id="app">
    <Title> Judul</Title>
    <todo-list/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Title from './components/Title.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Title,
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
