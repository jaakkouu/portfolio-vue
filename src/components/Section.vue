<template>
    <div>
        <Title v-if=title :title=title :centerized=centerized />
        <slot></slot>
    </div>
</template>

<script>
import Title from './Title'

export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    centerized: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    Title
  }
}
</script>
