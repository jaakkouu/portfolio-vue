<template>
  <div class="introduction">
    <header>Introduction</header>
    <p>{{ this.description }}</p>
  </div>
</template>

<script>
export default {
    name: 'Introduction',
    props: ['description']
}
</script>

<style>

</style>