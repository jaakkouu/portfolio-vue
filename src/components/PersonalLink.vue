<template>
  <FontAwesomeIcon 
    v-on:click="redirectTo(personalLink.href)"
    size="lg" 
    :icon="[personalLink.iconPrefix, personalLink.icon]"
  />
</template>

<script>
export default {
  name: 'PersonalLink',
  props: {
    personalLink: Object
  },
  methods: {
    redirectTo(href) {
      window.location.href = href;
    }
  }
}
</script>