<template>
    <div class="layoutSidebar">
        left12
        <hello-world :msg="getMsg"> </hello-world>
        <el-button @click="changeMsg">改变msg</el-button>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';
    import HelloWorld from '@/components/common/HelloWorld.vue';
    @Component({
        name: 'LayoutSidebar',
        components : {
            HelloWorld,
        },
    })
    export default class LayoutSidebar extends Vue {
        private changeMsg() {
            this.$store.dispatch('helloModule/msgEmit' , 'changeMsg') ;
        }
        get getMsg() {
            return this.$store.state[('helloModule' as any)].msg ;
        }
    }
</script>
<style lang="less" scoped>
.layoutSidebar{
    height:100%;
}
</style>