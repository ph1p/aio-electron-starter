<template>
  <div id="app">
    <div class="titlebar"></div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/example">Example Page</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .titlebar {
    height: 38px;
    background-color: #333;
    -webkit-user-select: none;
    -webkit-app-region: drag;
  }
}
body,
html {
  overflow: auto;
  margin: 0;
}
nav {
  background-color: #eee;
  padding: 20px;
  a {
    margin-right: 10px;
    font-size: 20px;
    color: #2c3e50;
  }
}
</style>
