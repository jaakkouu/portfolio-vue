<template>
  <div id="referenceGrid">
    <ReferenceGridItem v-for="(reference,index) in references" v-bind:key=index v-bind:reference=reference />
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