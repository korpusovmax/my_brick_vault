<template>
  <div class="card">
    <material-box>
      <img src="" alt="Картинка набора" class="set_preview">
      <div class="up_line">
        <material-text text_class="title_medium">Название набора</material-text>
        <material-text text_class="title_medium primary_text">Инстркуция</material-text>
      </div>
      <div class="middle_line">
        <material-check-box :checked="checked" @click="checked = !checked"></material-check-box>
        <material-text text_class="body_large">Соберу</material-text>
      </div>
    </material-box>
  </div>
</template>

<script>
import MaterialBox from "@/components/ui_kit/MaterialBox.vue";
import MaterialText from "@/components/ui_kit/text/MaterialText.vue";
import MaterialCheckBox from "@/components/ui_kit/MaterialCheckBox.vue";
import ListItem from "@/components/ui_kit/ListItem.vue";

export default {
  components: {ListItem, MaterialCheckBox, MaterialText, MaterialBox},
  data() {
    return {
      checked: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.set_preview {
  height: 128px;
  width: 100%;
  background-color: #CAC4D0;
}
.up_line {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.middle_line {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
}
</style>