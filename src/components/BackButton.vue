<template>
    <Button classes="btn back-button" :click="click">
        <FontAwesomeIcon size="xs" :icon="['fas', 'arrow-left']" />
        Palaa takaisin
    </Button>
</template>

<script>
import Button from './Button'

export default {
  name: 'BackButton',
  props: {
    click: {
      type: Function,
      required: false
    }
  },
  components: {
    Button
  }
}
</script>
