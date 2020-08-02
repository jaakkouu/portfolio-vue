<template>
  <div class="references">
    <h2>References</h2>
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

<style>

</style>