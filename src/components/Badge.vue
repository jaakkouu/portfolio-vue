<template>
    <span v-bind:style="{backgroundColor: backgroundColor}" class="badge">{{ skill }}</span>
</template>

<script>

export default {
  name: 'SkillBadge',
  props: {
    skill: String,
    backgroundColor: String
  }
}
</script>
