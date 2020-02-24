<template>
    <div class="layoutMain">
        中间布局        
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    @Component({
        name: 'LayoutMain',
        components : {
        },
    })
    export default class LayoutMain extends Vue {
    }

</script>
<style lang="less" scoped>
    .layoutMain{
        outline:1px solid red;
        height:100%;
        position: relative;
        margin-left:18%;
        margin-right:17%
    }
    .map-wrap{
        position: absolute;
        top:0;
        left:0;
        right: 0;
        bottom:0;
    }
</style>