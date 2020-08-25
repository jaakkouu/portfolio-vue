<template>
    <Content>
        Contact View
    </Content>
</template>

<script>
import Content from './Content'

export default {
    name: 'ContactView',
    props: {
        setView: {
            type: Function,
            required: true
        }
    },
    components: {
        Content
    }
}
</script>