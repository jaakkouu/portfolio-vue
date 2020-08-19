<template>
    <div class="loader">
        <FontAwesomeIcon size="6x" :icon="['fas', 'spinner']" inverse spin />
    </div>
</template>

<script>
export default {
    name: 'Loader'
}
</script>