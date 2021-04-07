<template>
  <div class="home">
    <Header />
    <h2>This is home</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style scoped>
  .home {
    border: solid 1px blue;
  }
</style>
