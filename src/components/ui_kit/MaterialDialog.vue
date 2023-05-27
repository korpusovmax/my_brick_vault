<template>
  <div class="dialog">
    <material-text @click="opened = !opened" text_class="title_small">Посмотреть детали</material-text>
    <div v-if="opened" class="list">
      <div v-for="brick in set_data" class="table_line">
        <div class="table_cell">{{brick[0]}}</div>
        <div class="table_cell">
          <p class="quantity" v-html="get_quantity(brick)"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialText from "@/components/ui_kit/text/MaterialText.vue";

export default {
  components: {MaterialText},
  props: {
    set_data: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    get_quantity(brick) {
      let needed = brick[1];
      let owned = brick[2];
      if (owned > needed) {
        return needed;
      } else {
        return `<span style="color:#76ff65">${owned}</span> + <span style="color:crimson">${needed-owned}</span>`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  cursor: pointer;
  position: absolute;
  top: 128+36+12+24+12px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  gap: 8px;

  width: 160px;
  min-height: 36px;
  max-height: 256px;
  background: #FEF7FF;
  border-radius: 5px;
  box-shadow: 6px 4px 11px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #8f9392;

  overflow-y: auto;
  overflow-x: hidden;
}
.list {
  margin-top: 16px;
}
.table_line {
  width: 100%;
  border-bottom: 1px solid #8f9392;
}
.table_cell {
  width: 50%;
  border-right: 1px solid #8f9392;
}
</style>