<template>
    <div class="phases">
        <Phase v-for="(phase,index) in this.phases" :key=index :phase="phase" />
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
