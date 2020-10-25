<template>
    <h1 :data-testid="$dataTestIds.headerName()" class="name">{{ name }}</h1>
</template>

<script>
export default {
  name: 'Name',
  props: {
    name: {
      type: String
    }
  }
}
</script>
