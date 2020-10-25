<template>
    <div :data-testid="$dataTestIds.contentContainer()" id="content" :class=classes>
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
