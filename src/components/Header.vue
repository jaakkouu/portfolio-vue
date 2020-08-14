<template>
    <div id="header">
        <Name v-bind:name="this.personal.name"/>
        <JobTitle v-bind:jobTitle="this.personal.jobTitle"/>
        <ProfileImage />
    </div>
</template>

<script>
import Name from './Name'
import JobTitle from './JobTitle'
import ProfileImage from './ProfileImage'

export default {
    name: 'Header',
    props: ['personal'],
    components: {
        Name,
        JobTitle,
        ProfileImage
    }
}
</script>