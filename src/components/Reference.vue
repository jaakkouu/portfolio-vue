<template>
  <div class="reference">
    <header>
      <span>{{ this.reference.name }} 
        {{ this.hasAdditionalInfo() 
          ? ' | ' + this.reference.additionalInfo
          : ''
        }}
      </span>
    </header>
    <p>{{ this.reference['short-description'] }}</p>
    <Badges v-bind:badges="this.reference.skills" />
  </div>
</template>

<script>

import Badges from './Badges'

export default {
    name: 'Reference',
    props: ['reference'],
    components: {
      Badges
    },
    methods: {
      hasAdditionalInfo() {
        return this.reference.hasOwnProperty('additionalInfo') && this.reference.additionalInfo.length
      }
    }
}
</script>

<style>

</style>