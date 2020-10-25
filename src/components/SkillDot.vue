<template>
    <span :style="{backgroundColor: backgroundColor}" :title=skill class="skill"></span>
</template>

<script>
export default {
  name: 'SkillDot',
  props: {
    skill: String,
    backgroundColor: String
  }
}
</script>
