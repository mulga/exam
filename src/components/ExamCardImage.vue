<template>
  <div class="card-image" :class="examClassType">{{ text }}</div>
</template>

<script>
export default {
  name: "ExamCardImage",
  components: {},
  props: ["type", "text"],

  computed: {
    examClassType() {
      return {
        "card-image--a1": this.type === "a1",
        "card-image--a2": this.type === "a2",
        "card-image--b1": this.type === "b1",
        "card-image--b2": this.type === "b2",
        "card-image--c1": this.type === "c1",
        "card-image--dtz": this.type === "dtz",
      };
    },
  },
};
</script>

<style scoped>
.card-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.card-image--a1 {
  background-color: hsl(127, 54%, 80%);
}

.card-image--a2 {
  background-color: hsl(207, 95%, 80%);
}

.card-image--b1 {
  background-color: hsl(188, 100%, 80%);
}

.card-image--b2 {
  background-color: hsl(324, 86%, 80%);
}

.card-image--c1 {
  background-color: hsl(0, 94%, 80%);
}

.card-image--dtz {
  background-color: hsl(188, 100%, 80%);
}
</style>
