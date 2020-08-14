<template>
  <div class="reference">
    <h3>
      <span>{{ this.reference.name }} 
        {{ this.hasAdditionalInfo() 
          ? ' | ' + this.reference.additionalInfo
          : ''
        }}
      </span>
    </h3>
    <p v-html="this.reference['short-description']" />
    <SkillList v-bind:skills="this.reference.skills" />
  </div>
</template>

<script>

import SkillList from './SkillList'

export default {
    name: 'Reference',
    props: ['reference'],
    components: {
      SkillList
    },
    methods: {
      hasAdditionalInfo() {
        return this.reference.hasOwnProperty('additionalInfo') && this.reference.additionalInfo.length
      }
    }
}
</script>