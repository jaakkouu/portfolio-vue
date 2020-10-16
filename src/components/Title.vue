<template>
  <h2 v-bind:class="classes">{{ title }}</h2>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true
    },
    centerized: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    classes: function () {
      const classArray = ['title']
      if (this.centerized) {
        classArray.push('center')
      }
      return classArray.join(' ')
    }
  }
}
</script>
