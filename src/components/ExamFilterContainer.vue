<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ExamFilterContainer",
  components: {},
  props: {},
};
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(7, 120px);
  flex-wrap: wrap;

  padding: 1rem;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  div {
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(2, auto);
    row-gap: 1rem;
  }
}
</style>
