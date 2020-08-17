<template>
    <div class="changeLanguageButton">
        <span v-on:click="buttonAction">{{ buttonText }}</span>
    </div>
</template>

<script>
export default {
    name: 'ChangeLanguageButton',
    props: {
        buttonText: String,
        buttonAction: Function
    }
}
</script>