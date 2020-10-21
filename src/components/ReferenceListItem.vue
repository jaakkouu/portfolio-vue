<template>
  <div v-bind:data-testid="$dataTestIds.referencesListItem()" class="reference">
    <h3 style="position:relative">
      <EyeButton v-if="hasImages()" />
      <span>{{ reference.name }}
        {{ this.hasAdditionalInfo()
          ? ' | ' + reference.additionalInfo
          : ''
        }}
      </span>
    </h3>
    <p v-html="reference['short-description']" />
    <SkillList v-bind:skills="reference.skills" />
  </div>
</template>

<script>
import SkillList from './SkillList'
import EyeButton from './EyeButton'

export default {
  name: 'ReferenceListItem',
  props: {
    reference: {
      type: Object,
      required: true
    }
  },
  components: {
    SkillList,
    EyeButton
  },
  methods: {
    hasImages () {
      return Object.prototype.hasOwnProperty.call(this.reference, 'images') && this.reference.images.length
    },
    hasAdditionalInfo () {
      return Object.prototype.hasOwnProperty.call(this.reference, 'additionalInfo') && this.reference.additionalInfo.length
    }
  }
}
</script>
