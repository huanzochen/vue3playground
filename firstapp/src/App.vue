<template>
  <img alt="Vue logo" src="./assets/logo.png" />
    <BadWatch />
  <BindClass />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Compute msg="I added a new component" />
  <ComputeWithCompute msg="A component using compute" />
  <ComputeWithMethod msg="using component with method" />
  <Watch test="this is a watch component" />
  <TestButton oauthbutton="testbutton" />
  <GoogleOAuth oauthbutton="this is GoogleAuthComponent" />
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <a href="https://www.google.com.tw">go to google</a>
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Compute from './components/Compute.vue'
import ComputeWithCompute from './components/ComputeWithCompute.vue'
import ComputeWithMethod from './components/ComputeWithMethod.vue'
import Watch from './components/Watch.vue'
import BadWatch from './components/BadWatch.vue'
import BindClass from './components/BindClass.vue'
import TestButton from './components/TestButton.vue'
import GoogleOAuth from './components/OAuth/GoogleOAuth.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Compute,
    ComputeWithCompute,
    ComputeWithMethod,
    Watch,
    BadWatch,
    BindClass,
    TestButton,
    GoogleOAuth
  }
}


</script>
