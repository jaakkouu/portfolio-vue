<template>
    <span :style="{backgroundColor: backgroundColor}" :title="name" class="skill"></span>
</template>

<script>
export default {
  name: 'SkillDot',
  props: {
    name: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String
    }
  }
}
</script>
