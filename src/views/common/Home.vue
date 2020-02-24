<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/img/logo.png">
    <HelloWorld :msg="getMsg"/>
    <el-button @click="changeMsg">改变msg</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/common/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
   get getMsg() {
       return this.$store.state[('helloModule' as any )].msg;
   }
   private changeMsg() {
       this.$store.dispatch('helloModule/msgEmit', 'changeMsg');
   }
}
</script>
