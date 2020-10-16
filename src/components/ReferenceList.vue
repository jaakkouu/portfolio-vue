<template>
  <div class="references">
    <ReferenceListItem
      v-for="(reference,index) in limitReferences(references)"
      v-bind:key=index
      v-bind:reference="reference"
    />
    <Button v-bind:click="toggleLimit">
        <FontAwesomeIcon size="xs" :icon="['fas', limit ? 'plus' : 'minus']" />
        {{ limit ? 'Näytä kaikki' : 'Näytä vähemmän' }}
    </Button>
  </div>
</template>

<script>
import ReferenceListItem from './ReferenceListItem'
import Button from './Button'

export default {
  name: 'ReferenceList',
  data () {
    return {
      limit: true,
      maxReferences: 5
    }
  },
  props: {
    references: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleLimit () {
      this.limit = !this.limit
    },
    limitReferences (references) {
      if (this.limit) {
        return references.filter((reference, i) => i < this.maxReferences)
      } else {
        return references
      }
    }
  },
  components: {
    ReferenceListItem,
    Button
  }
}
</script>
