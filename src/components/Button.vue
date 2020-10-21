<template>
    <button v-bind:data-testid="testid" v-bind:class="classes" v-on:click="click">
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
