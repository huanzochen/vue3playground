<template>
  <h1>{{ msg }}</h1>
  <div id="computed-basics">
    <p> {{ author.name }} Has published books:</p>
    <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
  </div>
</template>

<script>
export default {
  name: 'Compute',
  props: {
    msg: String
  },
  data() {
   return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  }
}
</script>
