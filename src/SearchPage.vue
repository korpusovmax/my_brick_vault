<template>
  <div class="search_page">
    <div class="table_view">
      <div v-for="i in [0, 1, 2, 3, 4, 5, 6]">
        <set-card></set-card>
      </div>
    </div>
  </div>
</template>

<script>

import SetCard from "@/components/SetCard.vue";

export default {
  name: 'SearchPage',
  components: {SetCard},

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