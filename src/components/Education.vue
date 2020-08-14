<template>
  <div class="education">
    <h3>
      <span>{{education.title}} | {{education.workPlace}}</span>
    </h3>
    <p>{{education.subject}} | {{education.started}} - {{education.ended}}</p>
  </div>
</template>

<script>
export default {
    name: 'Education',
    props: ['education']
}
</script>