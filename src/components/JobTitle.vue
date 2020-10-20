<template>
    <p v-bind:data-testid="$dataTestIds.headerJobTitle()" class="jobTitle">{{ jobTitle }}</p>
</template>

<script>
export default {
  name: 'JobTitle',
  props: {
    jobTitle: {
      type: String
    }
  }
}
</script>
