<template>
    <div v-bind:data-testid="$dataTestIds.referenceGridItem()" class="referenceGridItem" v-on:click="reference.setReferenceView">
        <img src="../assets/imageNotFound.gif" />
        <span class="name">{{ reference.name }}</span>
    </div>
</template>

<script>
export default {
  name: 'ReferenceGridItem',
  props: {
    reference: {
      type: Object,
      required: true
    }
  }
}
</script>
