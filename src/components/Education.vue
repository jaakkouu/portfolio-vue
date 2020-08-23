<template>
  <div class="education">
    <h3>{{education.title}} | <span class="purple">{{education.workPlace}}</span></h3>
    <p>{{education.subject}}</p>
    <Timeline :started="education.started" :ended="education.ended" />
  </div>
</template>

<script>
import Timeline from './Timeline'
export default {
    name: 'Education',
    props: {
      education: Object
    },
    components: {
      Timeline
    }
}
</script>