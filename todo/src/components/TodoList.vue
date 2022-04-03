<template>
<div>
  <ol>
      <todo-list-item
      v-for="(Data, index) in todoFromStore"
      :key="index"
      :todo="Data"
      :index="index"
      @edit-list-baru="editTodoTask"
      @hapus-todo="hapusTodo"
      />
  </ol>
  <div class="form">
    <input type="text" v-model="message">
    <button @click ="submitTodo">Tambahkan!</button>
  </div>
  <div v-if="showHebat">Hebat!</div>
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
    };
  },
  methods:{    
    submitTodo() {
    this.$store.dispatch('addTodoList', this.message);
    this.message = "";
    },
    
    hapusTodo(index) {
      this.$store.commit('deleteTodo', index);
    },
    
    editTodoTask(index, inputEdit) {
      this.$store.commit('setOrder', index);
      this.$store.commit('editTodo', inputEdit);
    },
  },
  computed:{
    showHebat: function(){
      return this.$store.state.todoList.length >=4;
    },
    todoFromStore(){
      return this.$store.state.todoList;
    },
  }
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