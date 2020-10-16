<template>
  <h2 class="title">{{ title }} - <span id="openReferences" class="btn purple" v-on:click="showList">{{ secondTitle }}</span></h2>
</template>

<script>
export default {
  name: 'ReferenceSectionTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    secondTitle: {
      type: String,
      required: true
    },
    showList: {
      type: Function,
      required: true
    }
  }
}
</script>
