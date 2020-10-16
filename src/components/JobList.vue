<template>
  <div class="jobs">
    <Job v-for="(job,index) in this.jobs" v-bind:key=index v-bind:job="job" />
  </div>
</template>

<script>
import Job from './Job'

export default {
  name: 'JobList',
  props: {
    jobs: Array
  },
  components: {
    Job
  }
}
</script>
