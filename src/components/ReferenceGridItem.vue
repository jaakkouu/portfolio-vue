<template>
    <div class="referenceGridItem">
        <img src="../assets/imageNotFound.gif" />
        <span class="name">{{ reference.name }}</span>
    </div>
</template>

<script>
export default {
    name: 'ReferenceGridItem',
    props: {
        reference: {
            type: Object,
            required: true
        }
    }
}
</script>