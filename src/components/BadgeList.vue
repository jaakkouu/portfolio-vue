<template>
  <div :data-testid="$dataTestIds.badgeList()" class="skills">
    <Badge :style="{ backgroundColor: skillItem.backgroundColor}" v-for="(skillItem, index) in this.skills" :key=index :skill="skillItem.name" />
  </div>
</template>

<script>
import Badge from './Badge'

export default {
  name: 'SkillList',
  props: {
    skills: {
      type: Array,
      required: true
    },
  },
  components: {
    Badge
  }
}
</script>
