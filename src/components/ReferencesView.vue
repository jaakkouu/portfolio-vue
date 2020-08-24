<template>
    <Content>
        <Section>
            References View
        </Section>
    </Content>
</template>

<script>
import Content from './Content'
import Section from './Section'
import Title from './Title'

export default {
    name: 'ReferencesView',
    props: {
        reference: {
            type: Object,
            required: true
        }
    },
    components: {
        Content,
        Section,
        Title
    }
}
</script>