<template>
  <div class="education">
    <h3>
      <span>{{education.title}} | <span class="purple">{{education.workPlace}}</span></span>
    </h3>
    <p>{{education.subject}} | {{education.started}} - {{education.ended}}</p>
  </div>
</template>

<script>
export default {
    name: 'Education',
    props: {
      education: Object
    }
}
</script>