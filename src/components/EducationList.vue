<template>
  <div class="educations">
    <h2>Education</h2>
    <Education v-for="education in this.educations" v-bind:education="education" />
  </div>
</template>

<script>

import Education from './Education'

export default {
    name: 'EducationList',
    props: ['educations'],
    components: {
      Education
    }
}
</script>

<style>

</style>