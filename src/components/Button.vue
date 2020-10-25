<template>
    <button :data-testid="testid" :class="classes" v-on:click="click">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    click: {
      type: Function,
      required: false
    },
    testid: {
      type: String,
      required: false
    },
    classes: {
      type: String,
      required: false,
      default: 'btn'
    }
  }
}
</script>
