<template>
  <div class="references">
    <Reference 
      v-for="reference in limitReferences(references)" 
      v-bind:reference="reference" 
    />
    <span class="btn btn-outline" v-on:click="toggleLimit">
      <FontAwesomeIcon size="xs" :icon="['fas', limit ? 'plus' : 'minus']" />
      {{ limit ? 'Näytä kaikki' : 'Näytä vähemmän' }}
    </span>
  </div>
</template>

<script>
import Reference from './Reference'
export default {
    name: 'ReferenceList',
    data() {
      return {
        limit: true,
        maxReferences: 5
      }
    },
    props: {
      references: Array,
    },
    methods: {
      toggleLimit(){
        this.limit = !this.limit
      },
      limitReferences(references){
        if(this.limit){
          return references.filter((reference, i) => i < this.maxReferences)
        } else {
          return references
        }
      }
    },
    components: {
      Reference
    }
}
</script>