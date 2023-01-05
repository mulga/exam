<template>
  <div class="container">
    <h1>Style Guide</h1>
    <p>Here is a list of all the styles used in this project.</p>
    <h2>Colors</h2>
    <div class="color" :style="{ backgroundColor: color }"></div>
    <base-button>Anmelden</base-button>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: { BaseButton },
  name: "StyleGuide",
  data() {
    return {
      color: "red",
    };
  },
};
</script>

<style scoped></style>
