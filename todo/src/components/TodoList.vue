<template>
<div>
  <ol>
      <todo-list-item
      v-for="(Todo, index) in todoList"
      :key="index"
      :todo="Todo"
      :index="index"
      @edit-list-baru="editTodoTask"
      @hapus-todo="hapusTodo"
      />
  </ol>
  <div class="form">
    <input type="text" v-model="message">
    <button v-on:click ="submitTodo()">Tambahkan!</button>
  </div>
  <!-- <div>{{message}}</div> -->
  <div v-if="todoList.length >=4">Hebat!</div>
</div>  
</template>

<script>
  import TodoListItem from '@/components/TodoListItem.vue'

  export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  data(){
    return{
      message : "",
      Todo: "",
      todoList : [],
      index: ""
    };
  },
  methods:{    
      submitTodo() {
      console.log(this.Todo);
      this.todoList.push({ todoList: this.message, isEdit: 0 });
      this.message = "";
      },
      
      hapusTodo(index) {
        this.todoList.splice(index, 1);
      },
      
      editTodoTaks(index, inputEdit) {
        this.todoList[index] = inputEdit;
      },
    },
  };

</script>

<style scoped>
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