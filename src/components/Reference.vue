<template>
  <div class="reference">
    <h3>
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