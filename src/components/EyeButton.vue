<template>
    <div v-on:click="click" v-bind:data-testid="$dataTestIds.openReferenceEyeButton()" class="eyeButton">
        <FontAwesomeIcon :icon="['fas', 'eye']" />
    </div>
</template>

<script>
export default {
  name: 'EyeButton',
  props: {
    click: {
      type: Function
    }
  }
}
</script>
