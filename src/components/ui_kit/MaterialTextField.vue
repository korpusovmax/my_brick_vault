<template>
    <div class="input">
        <p class="input__label">{{label}}</p>
        <span class="input__text" contenteditable="true"></span>
    </div>
</template>

<script>
import {nextTick} from "vue";

export default {
    props: {
        label: {
            type: String,
            required: true,
            default: 'Label'
        }
    },
    mounted() {
        nextTick(() => {
            let input = document.getElementsByClassName('input')[0];
            let text = document.getElementsByClassName('input__text')[0];
            text.addEventListener('focus', (e) => {
                input.style.borderColor = '#7868ca';
            });
            text.addEventListener('blur', (e) => {
                input.style.borderColor = '#79747E';
            });
        })
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';
.input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px 0 0;
    gap: 10px;

    border: 2px solid #79747E;
    border-radius: 4px;
    position: relative;
    min-width: 112px;
    width: 100%;

    &__label {
        font-size: 12px;
        line-height: 16px;
        position: absolute;
        height: 16px;
        padding: 0 4px 0 4px;
        left: 12px;
        top: -8px;
        color: #49454F;

        /* M3/sys/light/surface */
        background: #F7F2FA;
    }
    &__text {
        margin-left: 16px;
        margin-bottom: 16px;
        outline: none;
        font-size: 24px;
        line-height: 24px;
        color: $black-color;
        margin-top: 16px;
        min-width: 100%;
        min-height: 24px;
        &:focus {
            outline: none;
        }
    }
}

</style>