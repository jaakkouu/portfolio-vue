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
    <Timeline :started="job.started" :ended="job.ended" />
  </div>
</template>

<script>
import PhaseList from './PhaseList'
import Timeline from './Timeline'

export default {
  name: 'Job',
  props: {
    job: Object
  },
  components: {
    PhaseList,
    Timeline
  },
  methods: {
    hasPhases () {
      return Object.prototype.hasOwnProperty.call(this.job, 'phases') && this.job.phases.length
    }
  }
}
</script>
