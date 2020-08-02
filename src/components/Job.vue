<template>
  <div class="job" v-if="this.hasPhases()">
    <header>
      <span>{{ this.job.workPlace }}</span>
    </header>
    <PhaseList v-bind:phases="this.job.phases" />
  </div>
  <div class="job" v-else>
    <header>
      <span>{{ this.job.title }} || {{ this.job.workPlace }}</span>
    </header>
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

<style>

</style>