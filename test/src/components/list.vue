
  <template>
    <li v-for-key=todo in listTodo> {{todo}} </li>
  </template>
  
  <script>
  export default {
    name: 'list',
    props: {
    message: String,
    listTodo : Array
    }
  
  }
  </script>
  
  <style>

  </style>