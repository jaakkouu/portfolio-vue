<template>
  <div :data-testid="$dataTestIds.referencesGridContainer()" id="referenceGrid">
    <ReferenceGridItem v-for="(reference,index) in references" :key=index :reference=reference />
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
