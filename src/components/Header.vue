<template>
    <div id="header">
        <Name v-bind:name="this.personal.name"/>
        <JobTitle v-bind:jobTitle="this.personal.jobTitle"/>
        <ProfileImage />
        <PersonalLinks v-bind:personalLinks=personalLinks />
    </div>
</template>

<script>
import Name from './Name'
import JobTitle from './JobTitle'
import ProfileImage from './ProfileImage'
import PersonalLinks from './PersonalLinks'

export default {
  name: 'Header',
  props: {
    personal: Object,
    personalLinks: Array
  },
  components: {
    Name,
    JobTitle,
    ProfileImage,
    PersonalLinks
  }
}
</script>
