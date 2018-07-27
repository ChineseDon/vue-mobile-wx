<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <a><router-link :to="{name: 'HelloFromVux', params: {id: 123}}" >helloworld</router-link></a>
  </div>
  <intro :person="person"></intro>
</template>

<script>
import intro from './intro'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      person: {
        name: 'txq',
        age: '24'
      }
    }
  },
  component: {
    intro
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
