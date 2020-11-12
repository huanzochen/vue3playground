<template>
  <div id="watch-example" :name="oauthbutton">
    <p>
      GoogleAuth:
     <button @click="google">GoogleOAuth</button>
    </p>
    <p>{{ answer }}</p>
    <h3> envTest: </h3>
    <p>{{ envTest }}</p>
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
      answer: 'Google OAuth Test',
      envTest: import.meta.env.VITE_CLIENT_ID
    }
  },
  watch: {
  },
  methods: {
    google() {
      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
client_id=${import.meta.env.VITE_CLIENT_ID}&
redirect_uri=${import.meta.env.VITE_EGG_VUE3_PLAYGROUND}/oauth/google/callback&
response_type=code&
scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile
`
// scope=https://www.googleapis.com/auth/userinfo.email,https://www.googleapis.com/auth/userinfo.profile
      // this.$router.push({
      //   path: 'https://accounts.google.com/o/oauth2/v2/auth'
      // })
    }
  }
}
</script>
