<template>
  <Header />
  <router-view />
  <HelloWorld msg="Bienvenue de notre application de gestion de tournois" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
//import { appendFile } from 'fs';


export default {
  name: 'App',
  components: {
    Header,
    HelloWorld
  }
}
</script>

<style>
#app {
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html { font-size: 22px; }
  body { font-family: 'Roboto', sans-serif; }

  a {
    color: #0094ff;
    text-decoration: none;
  }

  a:hover {
    color: 
  }
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
