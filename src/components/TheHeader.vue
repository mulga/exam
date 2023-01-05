<template>
  <div class="header">
    <div class="container">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/styleguide">Style</router-link> |
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  components: {},
  emits: ["showModal"],
  methods: {},
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 120px;
  background-color: #5da4a4;
  background-image: url("@/assets/bg-header-desktop.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

nav {
  /* padding: 70px; */
  /* height: 150px; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
