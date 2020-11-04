<template>
<div
  class="static"
  :class="{ active: isActive, 
  'text-danger': hasError,
  'red-panel': isRed, }"
>
someclass has been bind
</div>


<div :class="anotherClassObject">
another div
</div>
<div :class="classControlByComputed">
another class control by computed
</div>

<div :class="[array1, array2]">
class in array
</div>

</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      isRed: true,
      error: null,
      anotherClassObject: { 
        end: false,
        start: true
      },
      array1: 'array1class1',
      array2: 'array2class2'
    }
  },
  computed: {
    classControlByComputed() {
      // console.log('testconsole.log')
      // console.log('this.error')
      // console.log(this.error)
      // console.log('this.error.type')
      // console.log(Boolean(this.error))
      return {
        activeand: this.isActive && this.hasError,
        activeor: this.isActive || this.hasError,
        typetest: this.error || this.error === null
      }
    }
  }
}
</script>