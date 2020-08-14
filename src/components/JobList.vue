<template>
  <div class="jobs">
    <Job v-for="job in this.jobs" v-bind:job="job" />
  </div>
</template>

<script>
import Job from './Job'

export default {
  name: 'JobList',
  props: ['jobs'],
  components: {
    Job
  }
}
</script>