<template>
    <img v-bind:data-testid="$dataTestIds.headerProfileImage()" class="profileImage" src="../assets/logo.jpg">
</template>

<script>
export default {
  name: 'ProfileImage'
}
</script>
