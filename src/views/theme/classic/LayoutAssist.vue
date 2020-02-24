<template>
    <div class="layoutAssist">
         右边布局
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    @Component({
        name: 'LayoutAssist',
    })
    export default class LayoutAssist extends Vue {

    }
</script>
<style lang="less" scoped>
    .layoutAssist{
        outline:1px solid red;
        height:100%;
    }
</style>