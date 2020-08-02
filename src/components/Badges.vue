<template>
  <div class="badges">
      <Badge v-for="badge in this.badges" v-bind:badge="badge" />
  </div>
</template>

<script>

import Badge from './Badge'

export default {
    name: 'BadgeList',
    props: ['badges'],
    components: {
        Badge
    }
}
</script>

<style>

</style>