<template>
  <h2 class="title">{{ title }} - <span class="btn" v-on:click="showList">{{ secondTitle }}</span></h2>
</template>

<script>
export default {
    name: 'Title',
    props: {
      title: String,
      secondTitle: String,
      showList: Function
    }
}
</script>