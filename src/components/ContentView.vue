<template>
    <component  v-bind:is=view v-bind:data=data v-bind:setView=setView
    />
</template>

<script>
import FrontView from './FrontView'
import ReferencesView from './ReferencesView'
import ReferenceView from './ReferenceView'
import ContactView from './ContactView'

export default {
  name: 'ContentView',
  data () {
    return {
      view: 'FrontView',
      data: null
    }
  },
  props: {
    computedData: {
      type: Object,
      required: true
    }
  },
  components: {
    FrontView,
    ReferenceView,
    ReferencesView,
    ContactView
  },
  beforeMount: function () {
    this.data = this.filterDataToView()
  },
  methods: {
    setView (view) {
      this.view = view
    },
    setData (data) {
      this.data = data
    },
    setReferenceView (reference) {
      this.setData(reference)
      this.setView('ReferenceView')
    },
    filterDataToView () {
      switch (this.view) {
        case 'ReferencesView': return {
          titles: this.computedData.titles,
          references: this.computedData.references.map(reference => ({
            ...reference,
            setReferenceView: () => this.setReferenceView(reference)
          }))
        }
        case 'ReferenceView': return {
          reference: this.data,
          titles: this.computedData.titles
        }
        default: return {
          titles: this.computedData.titles,
          personal: this.computedData.personal,
          jobs: this.computedData.jobs,
          education: this.computedData.education,
          knowledges: this.computedData.knowledges,
          references: this.computedData.references
        }
      }
    }
  },
  watch: {
    view: function () {
      this.data = this.filterDataToView()
    }
  }
}
</script>
