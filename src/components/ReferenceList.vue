<template>
  <div class="references">
    <Reference v-for="reference in this.references" v-bind:reference="reference" />
  </div>
</template>

<script>
import Reference from './Reference'
export default {
    name: 'ReferenceList',
    props: ['references'],
    components: {
      Reference
    }
}
</script>