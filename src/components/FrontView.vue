<template>
    <Content classes="front-view">
        <ContentLeft>
            <Section :title=data.titles.introduction>
                <Introduction :description=data.personal.description />
             </Section>
            <Section :title=data.titles.experience>
                <JobList :jobs=data.jobs />
            </Section>
            <Section :title=data.titles.education>
                <EducationList :educations=data.education />
            </Section>
        </ContentLeft>
        <ContentDivider />
        <ContentRight>
            <Section :title=data.titles.knowledge>
                <BadgeList :skills=data.knowledges />
            </Section>
            <Section>
                <ReferenceSectionTitle
                    :title=data.titles.references
                    :secondTitle=data.titles.listhere
                    :showList="() => setView('ReferencesView')"
                />
                <ReferenceList :references=data.references />
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
