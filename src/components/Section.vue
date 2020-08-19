<template>
    <div>
        <Title v-if=title v-bind:title=title />
        <slot></slot>
    </div>
</template>

<script>
import Title from './Title'

export default {
    name: 'Section',
    props: {
        title: String
    },
    components: {
        Title
    }
}
</script>