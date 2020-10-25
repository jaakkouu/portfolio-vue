<template>
  <div class="jobs">
    <Job v-for="(job,index) in this.jobs" :key=index :job="job" />
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
