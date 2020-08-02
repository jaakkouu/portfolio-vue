<template>
    <div class="personal">
        <h1>{{ this.personal.name }}</h1>
        <p>{{ this.personal.jobTitle }}</p>
        <img src="../assets/logo.png">
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['personal']
}
</script>

<style>

</style>