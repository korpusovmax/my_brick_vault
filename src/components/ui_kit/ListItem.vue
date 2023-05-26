<template>
    <div class="item">
        <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    align-items: center;
    padding: 8px 24px 8px 16px;
    gap: 16px;
    height: min-content;
}
</style>