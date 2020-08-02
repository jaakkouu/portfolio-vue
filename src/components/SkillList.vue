<template>
  <div class="skills">
    <h2>Skills</h2>
    <Skill v-for="skill in this.skills" v-bind:skill="skill" />
  </div>
</template>

<script>

import Skill from './Skill'

export default {
    name: 'SkillList',
    props: ['skills'],
    components: {
      Skill
    }
}
</script>

<style>

</style>