<template>
<div id="demo">{{ fullName }} {{ firstName }}</div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'aaa'
    }
  },
  watch: {
    firstName(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName(val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
}
</script>