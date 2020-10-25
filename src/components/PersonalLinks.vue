<template>
  <div class="personalLinks">
        <PersonalLink v-for="(personalLinkItem, index) in this.personalLinks" :key=index :personalLink="personalLinkItem" />
  </div>
</template>

<script>
import PersonalLink from './PersonalLink'

export default {
  name: 'PersonalLinks',
  props: {
    personalLinks: Array
  },
  components: {
    PersonalLink
  }
}
</script>
