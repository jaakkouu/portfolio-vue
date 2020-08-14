<template>
  <div class="skills">
    <Badge v-for="skill in this.skills" v-bind:skill="skill" />
  </div>
</template>

<script>
import Badge from './Badge'

export default {
    name: 'SkillList',
    props: ['skills'],
    components: {
      Badge
    }
}
</script>