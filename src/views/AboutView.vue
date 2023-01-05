<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <button @click="filterItems">Filter</button>
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ],
      buttonText: "Item 2",
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => item.name === this.buttonText);
    },
  },
  methods: {
    filterItems() {
      // Do something
    },
  },
};
</script>
