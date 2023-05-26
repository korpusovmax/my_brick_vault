<template>
    <div class="main">
      <router-view></router-view>
    </div>
</template>

<script>
import MaterialSection from "./components/ui_kit/MaterialSection.vue";
import MaterialBox from "@/components/ui_kit/MaterialBox.vue";
import MaterialTextField from "@/components/ui_kit/MaterialTextField.vue";
import MaterialButton from "@/components/ui_kit/MaterialButton.vue";
import MaterialCheckBox from "@/components/ui_kit/MaterialCheckBox.vue";
import ListItem from "@/components/ui_kit/ListItem.vue";
import MaterialText from "@/components/ui_kit/text/MaterialText.vue";
import MaterialDivider from "@/components/ui_kit/MaterialDivider.vue";
import HomePage from "@/HomePage.vue";
import SearchPage from "@/SearchPage.vue";

export default {
    components: {
        MaterialDivider,
        MaterialText,
        ListItem, MaterialCheckBox, MaterialButton, MaterialTextField, MaterialBox, MaterialSection},
    setup() {


        return {}
    }
}
</script>

<style lang="scss">
@import "assets/style.scss";

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

.main {
  height: 100vh;
}
.primary_text {
    color: $primary-color;
}
</style>