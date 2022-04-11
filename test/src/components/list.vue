<template>
  <div class="formList">
    <ol>
        <li v-for ="(todo,index) in todoList" 
        :key=index>
            {{ todo }}
        </li>
    </ol>
    <div class="form">
      <input type="text" v-model="message">
      <div>{{ message }}</div>
      <button v-on:click ="tambahkan()">Tambahkan!</button>
    </div>
    <div v-if="this.todoList.length >=4">Hebat!</div>
  </div>
</template>

<script>
  export default {
  name: 'App',
  components:{
  },
  data(){
    return{
      message : " ",
      todoList : [],
    }
  },
  methods:{
      tambahkan(){
        console.log(this.message);
        this.todoList.push(this.message);
        this.message="";
      }
  },
  // computed:{
  //   showHebat: function(){
  //     return this.todoList.length >=4;
  //   }
  // },
};

</script>

<style>

</style>