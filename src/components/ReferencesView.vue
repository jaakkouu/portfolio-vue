<template>
    <Content>
        <BackButton v-bind:click="() => setView('FrontView')" />
        <Section v-bind:title=data.titles.references v-bind:centerized=true>
            <ReferenceGrid v-bind:references=data.references />
        </Section>
    </Content>
</template>

<script>
import Content from './Content'
import BackButton from './BackButton'
import Section from './Section'
import ReferenceGrid from './ReferenceGrid'

export default {
  name: 'ReferencesView',
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
    ReferenceGrid,
    Content,
    Section
  }
}
</script>
