<template>
  <div class="personalLinks">
        <PersonalLink v-for="personalLinkItem in this.personalLinks" v-bind:personalLink="personalLinkItem" />
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