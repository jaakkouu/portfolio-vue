<template>
  <div class="skills">
    <SkillDot v-for="(skillItem,index) in this.skills" :key=index :style="{ backgroundColor: skillItem.backgroundColor }" :name="skillItem.name" />
  </div>
</template>

<script>
import SkillDot from './SkillDot'

export default {
  name: 'SkillList',
  props: {
    skills: {
      type: Array
    }
  },
  components: {
    SkillDot
  }
}
</script>
