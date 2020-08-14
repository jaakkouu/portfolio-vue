<template>
  <div class="phase">
      <h3>{{ phase.title }}</h3>
      <p>{{ phase.started }} - {{ phase.ended }}</p>
  </div>
</template>

<script>
export default {
    name: 'Phase',
    props: ['phase']
}
</script>