<template>
  <button class="btn btn-primary">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  components: {},
};
</script>

<style scoped>
.btn {
  background-color: hsl(180, 29%, 50%);
}

.btn.btn-primary {
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
}

.btn.btn-primary:hover {
  background-color: hsl(180, 29%, 40%);
}

.btn.btn-primary:active {
  background-color: hsl(180, 29%, 30%);
}
</style>
