<template>
    <Content>
        <BackButton :click="() => setView('ReferencesView')" />
        <Section :title=data.reference.name :centerized=true>
            <p :data-testid="$dataTestIds.referenceViewDescription()" v-html=data.reference.description></p>
        </Section>
        <Section>
            <a :data-testid="$dataTestIds.referenceViewLink()" :href=data.reference.referenceLink>Katso verkossa</a>
        </Section>
        <Section :title=data.titles.skillstocomplete :centerized=true>
            <BadgeList :skills=data.reference.skills />
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
