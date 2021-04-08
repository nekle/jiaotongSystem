<template>
  <dv-border-box-8 class="Main">
      <div class="PointGraph">
        <TMap v-show="!this.isSim"></TMap>
        <Trace v-if="this.isSim" class="Trace"/>
      </div>
    <navigation-button button-name="开始仿真" @click.native="isSim = true"></navigation-button>
  </dv-border-box-8>
</template>

<script>
import Trace from "@/components/Help/Trace";
import TMap from "@/components/Help/TMap";
import NavigationButton from "@/components/Navigation/navigation-button";

export default {
  name: "sim-running",
  components: {
    NavigationButton,
    Trace,
    TMap,
  },
  data() {
    return {
      isSim: false
    }
  }
}
</script>

<style scoped>
.Main {
  position: relative;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  width: 13.2rem;
  height: 5.2rem;
  padding: .1rem;
  /*margin-left: 50px;*/
}
.PointGraph {
  display: inline-block;
}
.Trace {
  position: absolute;
  width: 5rem;
  height: 5rem;
  z-index: auto;
}
</style>