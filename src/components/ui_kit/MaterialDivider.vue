<template>
    <div class="divider" :class="{vertical:vertical}">
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    props: {
        vertical: {
            type: Boolean,
            required: false,
            default: true
        }
    }
}
</script>

<style lang="scss" scoped>
.divider {
    display: block;
    padding: 0 16px 0 16px;
    margin: 20px 0 20px 0;

    width: auto;
    height: 1px;
}
.vertical {
    width: 1px;
    height: auto;
    padding: 16px 0 16px 0;
    margin: 0 20px 0 20px;
}
.line {
    background-color: #CAC4D0;
    width: 100%;
    height: 100%;
}
</style>