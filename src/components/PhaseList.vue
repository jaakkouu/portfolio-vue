<template>
    <div class="phases">
        <Phase v-for="(phase,index) in this.phases" v-bind:key=index v-bind:phase="phase" />
    </div>
</template>

<script>
import Phase from './Phase'

export default {
  name: 'PhaseList',
  props: ['phases'],
  components: {
    Phase
  }
}
</script>
