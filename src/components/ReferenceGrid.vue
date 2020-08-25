<template>
  <div id="referenceGrid">
    <ReferenceGridItem v-for="reference in references" v-bind:reference=reference />
  </div>
</template>

<script>
import ReferenceGridItem from './ReferenceGridItem'

export default {
    name: 'ReferenceGrid',
    props: {
        references: {
            type: Array,
            required: true
        }
    },
    components: {
        ReferenceGridItem
    }
}
</script>