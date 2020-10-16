<template>
    <p>{{ timeline }}</p>
</template>

<script>

export default {
  name: 'Timeline',
  props: {
    started: String,
    ended: String
  },
  computed: {
    timeline: function () {
      let timeline = this.started
      if (this.ended.length) {
        timeline += ' - ' + this.ended
      }
      return timeline
    }
  }
}
</script>
