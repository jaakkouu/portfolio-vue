<template>
    <div class="phases">
        <Phase v-for="phase in this.phases" v-bind:phase="phase" />
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