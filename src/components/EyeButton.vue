<template>
    <div v-on:click="click" :data-testid="$dataTestIds.openReferenceEyeButton()" class="eyeButton">
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
