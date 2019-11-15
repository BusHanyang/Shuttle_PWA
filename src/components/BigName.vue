<template>
    <p> {{ this.target }}</p>
</template>

<script>
    export default {
        name: "BigName",
        data() {
            return {
                target: this.props
            };
        },
        props: ['dest']
    }
</script>

<style scoped>

</style>