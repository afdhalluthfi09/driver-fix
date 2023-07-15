<template>
  <router-view/>
</template>

<script>
import {messaging} from './firebaseConfig'
export default {
  created(){ messaging},
  data(){
    return{}
  }
}
</script>
<style lang="scss">
@import "@/assets/index.scss";
</style>
