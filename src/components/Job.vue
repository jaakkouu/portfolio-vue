<template>
  <div class="job" v-if="this.hasPhases()">
    <h3>
      <a :href="job.workPlaceLink">{{ job.workPlace }}</a>
    </h3>
    <PhaseList v-bind:phases="job.phases" />
  </div>
  <div class="job" v-else>
    <h3>
      <span>{{ job.title }} | <a :href="job.workPlaceLink">{{ job.workPlace }}</a></span>
    </h3>
    <p>{{ job.started }} - {{job.ended}}</p>
  </div>
</template>

<script>
import PhaseList from './PhaseList'

export default {
    name: 'Job',
    props: ['job'],
    components: {
      PhaseList
    },
    methods: {
      hasPhases() {
        return this.job.hasOwnProperty('phases') && this.job.phases.length
      }
    }
}
</script>