<template>
    <div class="button">
        <material-text text_class="title_large" :text_color="text_color"><slot></slot></material-text>
    </div>
</template>

<script>
import MaterialText from "@/components/ui_kit/text/MaterialText.vue";
export default {
    components: {
        MaterialText
    },
    data() {
        return {
            text_color: '#7868ca'
        }
    },
    mounted() {
        let btn = document.getElementsByClassName("button")[0];
        btn.addEventListener("mouseover", over, false);
        btn.addEventListener("mouseout", out, false);
        let data = this.$data;

        function over()
        {
            data.text_color = 'white';
        }

        function out()
        {
            data.text_color = '#7868ca';
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';
* {
    cursor: default;
}

.button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;

    border: 2px solid $primary-color;
    border-radius: 100px;
    transition-property: all;
    transition-timing-function: ease-out;
    transition-duration: 300ms;
    &:hover {
        background-color: $primary-color;
    }
}
</style>