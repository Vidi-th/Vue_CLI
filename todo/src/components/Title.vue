<template>
    <div class = "title">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Title',
//     props: {
//     msg: String
//   }
    data(){
    return{
      msg : "Todo List"
    }
  },
}
</script>

<style>
h1{
   font-size: 40px;
   color: darkblue; 
}
</style>