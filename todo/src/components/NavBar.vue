<template>
    <ul>
        <li><router-link to="/">Todo</router-link></li>
        <li><router-link to="/Detail">Detail</router-link></li>
        <li><a href="#">Contact</a></li>
    </ul>
</template>

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