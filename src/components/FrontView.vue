<template>
    <Content classes="front-view">
        <ContentLeft>
            <Section v-bind:title=data.titles.introduction>
                <Introduction v-bind:description=data.personal.description />
             </Section>
            <Section v-bind:title=data.titles.experience>
                <JobList v-bind:jobs=data.jobs />
            </Section>
            <Section v-bind:title=data.titles.education>
                <EducationList v-bind:educations=data.education />
            </Section>
        </ContentLeft>
        <ContentDivider />
        <ContentRight>
            <Section v-bind:title=data.titles.knowledge>
                <BadgeList v-bind:skills=data.knowledges />
            </Section>
            <Section>
                <ReferenceSectionTitle
                    v-bind:title=data.titles.references
                    v-bind:secondTitle=data.titles.listhere
                    v-bind:showList="() => setView('ReferencesView')"
                />
                <ReferenceList v-bind:references=data.references />
            </Section>
        </ContentRight>
    </Content>
</template>

<script>
import Section from './Section'
import ReferenceSectionTitle from './ReferenceSectionTitle'
import Content from './Content'
import ContentLeft from './ContentLeft'
import Introduction from './Introduction'
import JobList from './JobList'
import EducationList from './EducationList'
import ContentDivider from './ContentDivider'
import ContentRight from './ContentRight'
import BadgeList from './BadgeList'
import ReferenceList from './ReferenceList'

export default {
  name: 'FrontView',
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
    Content,
    Introduction,
    JobList,
    EducationList,
    Section,
    ContentLeft,
    ContentDivider,
    ContentRight,
    BadgeList,
    ReferenceSectionTitle,
    ReferenceList
  }
}
</script>
