<template>
    <div class="changeLanguageButton">
        <span>{{ buttonText }}</span>
    </div>
</template>

<script>
export default {
    name: 'ChangeLanguageButton',
    props: {
        buttonText: String
    }
}
</script>