<template>
    <div>
        Hi from vue2-sidebar. Date is {{date}}!
    </div>
</template>

<script>
    export default {
        props: [],
        created: function () {
        },
        mounted: function () {
            this.load();
        },
        methods: {
            load() {

            }
        },
        data() {
            return {
                date: (new Date()).toDateString(),
            }
        }
    }
</script>