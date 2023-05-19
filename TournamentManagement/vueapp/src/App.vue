<template>
  <Header></Header>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
