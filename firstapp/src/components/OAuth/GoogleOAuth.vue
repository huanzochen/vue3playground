<template>
  <div id="watch-example" :name="oauthbutton">
    <p>
      GoogleAuth:
     <button @click="google">GoogleOAuth</button>
    </p>
    <p>{{ answer }}</p>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'GoogleOAuth',
  props: {
    test: String
  },
  data() {
    return {
      answer: 'Google OAuth Test'
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
