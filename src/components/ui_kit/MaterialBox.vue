<template>
    <div class="box">
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

.box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    border-radius: 12px;
    background: #F7F2FA;
    border: 1px solid #CAC4D0;
    padding: 36px;
}
</style>