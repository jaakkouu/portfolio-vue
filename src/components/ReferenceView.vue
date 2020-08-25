<template>
    <Content>
        Reference View
    </Content>
</template>

<script>
import Content from './Content'

export default {
    name: 'ReferenceView',
    props: {
        data: {
            type: Object,
            required: true
        },
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