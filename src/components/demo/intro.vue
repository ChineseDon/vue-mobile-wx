<template>
  <div class="intro-child" ref="child">
    <h1>I'm child Node</h1>
    <a><router-link :to="{name: 'HelloFromVux', params: {id: 123}}" >helloworld</router-link></a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods: {
    getChild: function() {
      console.log(this.$refs)
    }
  },
  props: [
    person: {
      type: Object
    }
  ]
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
