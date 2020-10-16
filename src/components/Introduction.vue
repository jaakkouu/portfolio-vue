<template>
  <div class="introduction">
    <p>{{ this.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: ['description']
}
</script>
