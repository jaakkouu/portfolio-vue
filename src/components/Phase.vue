<template>
  <div class="phase">
      <h3>{{ phase.title }}</h3>
      <Timeline :started="phase.started" :ended="phase.ended" />
  </div>
</template>

<script>
import Timeline from './Timeline'
export default {
    name: 'Phase',
    props: {
      phase: Object
    },
    components: {
      Timeline
    }
}
</script>