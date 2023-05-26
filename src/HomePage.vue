<template>
  <div class="main_section">
    <div class="up_group">
      <material-section>
        <p class="headline">Мои детали</p>
      </material-section>
      <material-section>
        <p class="headline">Мои наборы</p>
      </material-section>
    </div>
    <material-box>
      <div class="box_search">
        <material-text-field label="Поисковой запрос"></material-text-field>
        <material-button text_color="#7868ca">Поиск</material-button>
      </div>
      <div class="options_box">
        <div class="list_box">
          <list-item>
            <material-check-box></material-check-box>
            <material-text text_class="body_large">Учитывать совместимые</material-text>
          </list-item>
          <list-item>
            <material-check-box checked="true"></material-check-box>
            <material-text text_class="body_large">Учитывать недостающие</material-text>
          </list-item>
        </div>
        <material-divider></material-divider>
        <list-item>
          <material-check-box></material-check-box>
          <material-text text_class="body_large">Учитывать цвет</material-text>
        </list-item>
      </div>
    </material-box>
  </div>
</template>

<script>
import MaterialTextField from "@/components/ui_kit/MaterialTextField.vue";
import ListItem from "@/components/ui_kit/ListItem.vue";
import MaterialText from "@/components/ui_kit/text/MaterialText.vue";
import MaterialDivider from "@/components/ui_kit/MaterialDivider.vue";
import MaterialButton from "@/components/ui_kit/MaterialButton.vue";
import MaterialSection from "@/components/ui_kit/MaterialSection.vue";
import MaterialBox from "@/components/ui_kit/MaterialBox.vue";
import MaterialCheckBox from "@/components/ui_kit/MaterialCheckBox.vue";

export default {
  name: 'HomePage',
  components: {
    MaterialCheckBox,
    MaterialBox,
    MaterialSection,
    MaterialButton,
    MaterialDivider,
    MaterialText,
    ListItem,
    MaterialTextField
  },
}
</script>

<style lang="scss" scoped>
.main_section {
  height: 100vh;
  background-color: white;
  padding: 110px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.up_group {
  height: 100%;
  display: flex;
  gap: 48px;
}
.box_search {
  display: flex;
  gap: 16px;
  width: 100%;
}
.options_box {
  display: flex;
  width: 100%;
}
</style>