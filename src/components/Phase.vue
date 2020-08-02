<template>
  <div class="phase">
      <header>{{ this.phase.title }}</header>
      <p>{{this.phase.started}} - {{this.phase.ended}}</p>
  </div>
</template>

<script>
export default {
    name: 'Phase',
    props: ['phase']
}
</script>

<style>

</style>