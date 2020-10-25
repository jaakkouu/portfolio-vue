<template>
    <div id="header">
        <Name :name="this.personal.name"/>
        <JobTitle :jobTitle="this.personal.jobTitle"/>
        <ProfileImage />
        <PersonalLinks :personalLinks=personalLinks />
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
