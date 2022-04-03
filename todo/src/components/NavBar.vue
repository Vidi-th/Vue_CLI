<template>
  <div>
    <ul>
      <li><router-link :class="{active:this.pg_1}" to="/" @click="showActivePage">Todo</router-link></li>
      <li><router-link :class="{active:this.pg_2}" to="/Detail" v-on:click="showActivePage">Detail</router-link></li>
      <li><router-link  to="/Contact">Contact</router-link></li>
    </ul>
    <!-- <div v-if="showActivePage"></div> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      pg_1 : true,
      pg_2 : false,
    };
  },
  methods:{    
    submitPage(nomor) {
    this.$store.commit('setPage', nomor);
    },
    showActivePage(){
      console.log(this.pg_1);
      console.log(this.pg_2);
      // if(nomor == 1){
      //     this.pg_1 = true;
      //     this.pg_2 = false;
      // }

      // else if (nomor == 2){
      //   this.pg_1 = false;
      //   this.pg_2 = true;
      // }
    },
  },
  computed:{
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #09bd7b;
}

</style>