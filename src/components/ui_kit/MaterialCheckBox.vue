<template>
    <div class="checkbox" :class="{checked: checked}">
        <img v-if="checked" src="@/assets/checked_true.svg" alt="{{checked}}">
    </div>
</template>

<script>
export default {
    props: {
        checked: {
            type: Boolean,
            required: false,
            default: false
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
.checkbox {
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* M3/sys/light/on-surface-variant */
    border: 2px solid #49454F;
    border-radius: 2px;
    &:hover {
        border: 2px solid $primary-color;
    }
}
.checked {
    background: $primary-color;
    border-radius: 2px;
    border-width: 0;
}
</style>