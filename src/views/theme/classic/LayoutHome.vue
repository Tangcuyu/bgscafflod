<template>
    <div class="layoutHome-wrap">
        <div class="layout-assist-wrap">
            <!--right start-->
            <layout-assist></layout-assist>
            <!--right edn-->
        </div>
        <div class="layout-sidebar-wrap">
            <!--left start-->
            <layout-sidebar></layout-sidebar>
            <!--left edn-->
        </div>
        <div class="layout-main-wrap">
            <!--main start-->
            <layout-main></layout-main>
            <!--main edn-->
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import layoutAssist from '@/views/theme/classic/LayoutAssist.vue';
    import layoutMain from '@/views/theme/classic/LayoutMain.vue';
    import layoutSidebar from '@/views/theme/classic/LayoutSidebar.vue';
    @Component({
        name: 'LayoutHome',
        components : {
            layoutAssist,
            layoutMain,
            layoutSidebar,
        },
    })
    export default class LayoutHome extends Vue {

    }
</script>
<style lang="less" scoped>
    .layoutHome-wrap{
        outline:1px solid green;
        width: 100%;
        height:100%;
        &>div{
            box-sizing: border-box;
            outline:1px solid red;
        }

        .layout-assist-wrap{
            float: right;
            width: 17%;
            height:100%;
        }
        .layout-sidebar-wrap{
            float: left;
            width:18%;
            height:100%;
        }
        .layout-main-wrap{
            height:100%;

        }
    }
</style>