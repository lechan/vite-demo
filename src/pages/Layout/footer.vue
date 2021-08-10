<template>
    <footer class="footer">
        <p :class="color">
            &copy; {{ year }} 版权所有
        </p>
    </footer>
</template>

<script type="text/ecmascript-6">
export default {
    props: {
        color: {
            type: String,
            default: 'black'
        }
    },
    computed: {
        year() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss">
.footer {
    position: relative;
    height: 60px;
    line-height: 60px;
    margin: -60px 0px 0px 220px;
    p {
        margin: 0;
        text-align: center;
        font-size: 14px;
    }
}
</style>
