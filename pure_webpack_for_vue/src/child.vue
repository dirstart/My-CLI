<template>
    <div class="child-component">
        <div class="large-font child">这是子模板的输入框,神奇的热加载哈哈</div>
        <input type="text" @change="log" v-model="text">
        <span class="text">{{text}}</span>
        <br/>
    </div>
</template>
<style scoped lang="less" type="text/less">
    .child-component {
        .text {
            font-size: 30px;
            font-weight: bold;
            color: yellow;
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                text: 'child'
            }
        },
        methods: {
            log() {
                console.log(this.text)
            }
        }
    }
</script>
