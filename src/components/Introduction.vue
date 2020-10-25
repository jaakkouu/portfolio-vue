<template>
  <div class="introduction">
    <p class="mb-0">{{ this.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: ['description']
}
</script>
