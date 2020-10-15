<template>
    <Content>
        <BackButton v-bind:click="() => setView('ReferencesView')" />
        <Section v-bind:title=data.reference.name v-bind:centerized=true>
            <p v-html=data.reference.description></p>
        </Section>
        <Section>
            <a href=data.reference.referenceLink>Katso verkossa</a>
        </Section>
        <Section v-bind:title=data.titles.skillstocomplete v-bind:centerized=true>
            <BadgeList v-bind:skills=data.reference.skills />
        </Section>
    </Content>
</template>

<script>
import Content from './Content'
import BadgeList from './BadgeList'
import BackButton from './BackButton'
import Section from './Section'

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
        BackButton,
        BadgeList,
        Content,
        Section
    }
}
</script>