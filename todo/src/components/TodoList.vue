<template>
<div>
  <ol>
      <li v-for ="(todo, index) in todoList" v-bind:key=todo>
          {{todo}}
          <button @click="hapus(index)" class="hapus">Delete</button>
      </li>
  </ol>
  <div class="form">
    <input type="text" v-model="message">
    <button v-on:click ="tambahkan()">Tambahkan!</button>
  </div>
  <div>{{message}}</div>
  <div v-if="todoList.length >=4">Hebat!</div>
</div>  
</template>

<script>
  export default {
  name: 'TodoList',
  props: {
      message:String
  },
  data(){
    return{
      todoList : []
    }
  },
  methods:{
      tambahkan(){
          this.todoList.push(this.message);
          this.message="";
      },
      hapus(index){
        this.todoList.splice(index,1)
      }
  }
}

</script>

<style>
.form{
    display: flex;
}

button{
    margin-right: auto;
    margin-left: 10px;
}

input{
    flex:1;
}
</style>