<template>
    <div class="section">
        <slot></slot>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';
.section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border: 1px solid #79747E;
    border-radius: 12px;
    &:hover {
        background: rgba(103, 80, 164, 0.08);
    }
}
* {
    color: $primary-color;
}
</style>