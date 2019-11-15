<template>
    <p>{{ this.target }}</p>
</template>

<script>
    export default {
        name: "Target",
        props: ['dest'],
        data(){
            return{
                target: this.props
            }
        }
    }
</script>

<style scoped>

</style>