<template>
    <div id="content" v-bind:class=classes>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    classes: {
      type: String,
      required: false
    }
  }
}
</script>
