<template>
    <span v-bind:title=this.skill class="skill"></span>
</template>

<script>
export default {
    name: 'SkillDot',
    props: ['skill']
}
</script>