<template>
<div>
  <ol>
      <todo-list-item
      v-for="(Data, index) in todoList"
      :key="index"
      :todo="Data"
      :index="index"
      @edit-list-baru="editTodoTask"
      @hapus-todo="hapusTodo"
      />
  </ol>
  <div class="form">
    <input type="text" v-model="message">
    <button @click ="submitTodo()">Tambahkan!</button>
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
      todoList : [],
      index: ""
    };
  },
  methods:{    
      submitTodo() {
      this.todoList.push({ todoList: this.message, isEdit: 0 });
      this.message = "";
      },
      
      hapusTodo(index) {
        this.todoList.splice(index, 1);
      },
      
      editTodoTask(index, inputEdit) {
        console.log(inputEdit);
        console.log(index);
        // this.todoList[index] = inputEdit;
<<<<<<< HEAD
        this.todoList[index].todoList = inputEdit;
        
=======
        this.todoList[index] = {todoList: inputEdit, isEdit: 0}
        this.todoList.map(x => ({value:x}));
        console.log(this.todoList);
>>>>>>> c239086e46a2c597b7e85fbe8f52f490488bf2e0
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