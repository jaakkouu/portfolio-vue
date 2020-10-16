<template>
  <div class="skills">
    <SkillDot v-for="(skillItem,index) in this.skills" v-bind:key=index v-bind:style="{ backgroundColor: skillItem.backgroundColor}" v-bind:skill="skillItem.skill" />
  </div>
</template>

<script>

import SkillDot from './SkillDot'

export default {
  name: 'SkillList',
  props: ['skills'],
  components: {
    SkillDot
  }
}
</script>
