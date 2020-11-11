<template>
  <div id="watch-example" :name="oauthbutton">
    <p>
      Test Button:
     <button @click="google">Test Button</button>
    </p>
    <p>{{ answer }}</p>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'TestButton',
  props: {
    test: String
  },
  data() {
    return {
      answer: 'Test Button'
    }
  },
  watch: {
  },
  methods: {
    google() {
      console.log('hi')
      axios
        // .get('https://tw.rter.info/capi.php')
        .get('http://localhost:7001/test')
        .then(response => {
          console.log(response)
        })
      
    }
  }
}
</script>
