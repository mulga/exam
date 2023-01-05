<template>
  <button class="filter-button" :class="examClassType">
    <slot></slot>
  </button>
  <!-- <button :filterPosts="filterPosts"></button> -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ExamFilterButton",
  components: {},
  props: ["type", "text"],

  computed: {
    ...mapGetters(["filters"]),
    examClassType() {
      return {
        "filter-button--a1": this.type === "a1",
        "filter-button--a2": this.type === "a2",
        "filter-button--b1": this.type === "b1",
        "filter-button--b2": this.type === "b2",
        "filter-button--c1": this.type === "c1",
        "filter-button--dtz": this.type === "dtz",
      };
    },
  },
};
</script>

<style scoped>
.filter-button {
  width: 100px;
  padding: 0.3rem 0;

  border: none;

  display: grid;
  place-items: center;
}

.filter-button--a1 {
  background-color: hsl(127, 54%, 80%);
}

.filter-button--a2 {
  background-color: hsl(207, 95%, 80%);
}

.filter-button--b1 {
  background-color: hsl(188, 100%, 80%);
}

.filter-button--b2 {
  background-color: hsl(324, 86%, 80%);
}

.filter-button--c1 {
  background-color: hsl(0, 94%, 80%);
}

.filter-button--dtz {
  background-color: hsl(188, 100%, 80%);
}

button {
  cursor: pointer;
}
</style>
