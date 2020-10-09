<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Compute msg="I added a new component" />
  <ComputeChange msg="A component using compute" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Compute from './components/Compute.vue'
import ComputeChange from './components/ComputeChange.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Compute,
    ComputeChange
  }
}
</script>
