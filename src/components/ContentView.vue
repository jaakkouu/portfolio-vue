<template>
    <component 
        v-bind:is=view
        v-bind:data=data
        v-bind:setView=setView
    />
</template>

<script>
import FrontView from './FrontView'
import ReferencesView from './ReferencesView'
import ReferenceView from './ReferenceView'
import ContactView from './ContactView'

export default {
    name: 'ContentView',
    props: {
        data: {
            type: Object,
            required: true
        },
        view: {
            type: String,
            required: true
        },
        setView: {
            type: Function,
            required: true
        }
    },
    components: {
        FrontView,
        ReferenceView,
        ReferencesView,
        ContactView
    }
}
</script>