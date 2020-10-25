<template>
  <div class="educations">
    <Education v-for="(education, index) in this.educations" :key=index :education="education" />
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
