<template lang="pug">
	h1 {{msg}}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue!'
    }
  }
}
</script>

<style>
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
