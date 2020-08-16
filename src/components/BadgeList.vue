<template>
  <div class="skills">
    <Badge v-bind:style="{ backgroundColor: skillItem.backgroundColor}" v-for="skillItem in this.skills" v-bind:skill="skillItem.knowledge" />
  </div>
</template>

<script>
import Badge from './Badge'

export default {
    name: 'SkillList',
    props: {
      skills: Array,
      required: true
    },
    components: {
      Badge
    }
}
</script>