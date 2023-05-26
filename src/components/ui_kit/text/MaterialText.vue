<template>
    <div class="text_area">
        <p class="text" :class="text_class" :style="{color: text_color}"><slot></slot></p>
    </div>
</template>

<script>
export default {
    props: {
        text_class: {
            type: String,
            required: false,
            default: 'body_medium'
        },
        text_color: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
    white-space: nowrap;
}
.text_area {
  min-height: 24px;
}

.display_large {
    font-size: 57px;
    line-height: 64px;
    letter-spacing: -0.25px;
}
.display_medium {
    font-size: 45px;
    line-height: 52px;
}
.display_small {
    font-size: 36px;
    line-height: 44px;
}
.headline_large {
    font-size: 32px;
    line-height: 40px;
}
.headline_medium {
    font-size: 28px;
    line-height: 36px;
}
.headline_small {
    font-size: 24px;
    line-height: 32px;
}
.title_large {
    font-size: 22px;
    line-height: 28px;
}
.title_medium {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
}
.title_small {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
}
.body_large {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
}
.body_medium {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
}
.body_small {
    font-size: 12px;
    line-height: 16px;
}
</style>