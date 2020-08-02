<template>
  <div class="education">
    <header>
      <span>{{this.education.title}} | {{this.education.workPlace}}</span>
    </header>
    <p>{{this.education.subject}} | {{this.education.started}} - {{this.education.ended}}</p>
  </div>
</template>

<script>
export default {
    name: 'Education',
    props: ['education']
}
</script>

<style>

</style>