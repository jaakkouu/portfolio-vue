<template>
    <Content>
        <BackButton :click="() => setView('FrontView')" />
        <Section :title=data.titles.references :centerized=true>
            <ReferenceGrid :references=data.references />
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
