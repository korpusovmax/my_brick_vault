<template>
  <div class="dialog">
    <material-text @click="opened = !opened" text_class="title_small">Посмотреть детали</material-text>
    <div v-if="opened" class="list">
      <div v-for="brick in set_data">
        {{brick[0]}}:{{brick[1]}}
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

}
</style>