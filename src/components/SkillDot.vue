<template>
    <span v-bind:style="{backgroundColor: backgroundColor}" v-bind:title=skill class="skill"></span>
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