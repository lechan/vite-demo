<template>
    <header class="header manage-header">
        <div class="logo"></div>
        <login-info></login-info>
    </header>
</template>

<script>
import loginInfo from './loginInfo.vue'

export default {
    components: {
        'login-info': loginInfo
    }
}
</script>

<style lang="scss">
.manage-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 60px;
    min-width: 1300px;
    background: #262B2E;
    .logo {
        position: relative;
        top: 15px;
        left: 20px;
        width: 160px;
        height: 30px;
        background: url('../../assets/logo.png') no-repeat center;
        background-size: contain;
    }
    .login-info.login-info-manage {
        .logout-btn {
            box-shadow: 0 1px 1px #ddd;
            button {
                width: 90px;
                padding: 0px 20px;
                i {
                    color: #2ABDCB;
                }
            }
        }
    }
}
</style>
