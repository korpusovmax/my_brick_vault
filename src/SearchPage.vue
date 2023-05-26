<template>
  <div class="search_page">
    <div class="table_view">
      <div v-for="set in sets">
        <set-card :set_data="set"></set-card>
      </div>
    </div>
  </div>
</template>

<script>

import SetCard from "@/components/SetCard.vue";

export default {
  name: 'SearchPage',
  components: {SetCard},
  data() {
    return {
      sets: []
    }
  },
  methods: {
    searchForSets() {
      fetch('http://localhost:5000/search')
          .then(response => response.json)
          .then(data => this.sets = data)
    }
  },
  mounted() {
    this.searchForSets();
  }
}
</script>

<style lang="scss" scoped>
.search_page {
  height: 100vh;
  background-color: white;
  padding: 110px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.table_view {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 48px;
}
</style>