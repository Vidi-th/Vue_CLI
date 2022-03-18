<template>
  <div id="app">
    <!-- <ol>
        <li>
            {{todo}}
        </li>
    </ol> -->
    <input type="text" v-model="message">
    <div>{{message}}</div>
    <button v-on:click ="tambahkan()">Tambahkan!</button>
    <div v-if="todoList.length >=4">Hebat!</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      message : " ",
      todoList : []
    }
  },
  methods:{
      tambahkan(){
          this.todoList.push(this.message);
          this.message="";
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
