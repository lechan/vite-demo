<template>
    <div class="login">
        <div class="login-bg"></div>
        <div class="login-wrap">
            <div class="login-container">
                <div class="login-bottom">
                    <div class="login-step">
                        <div class="login-item">
                            <p>账号</p>
                            <el-input
                                v-model="userName"
                                placeholder="请输入用户名"
                                prefix-icon="el-icon-user"
                                @keyup.enter="loginHandler">
                            </el-input>
                        </div>
                        <div class="login-item">
                            <p>密码</p>
                            <el-input
                                v-model="password"
                                placeholder="请输入密码"
                                type="password"
                                prefix-icon="el-icon-key"
                                @keyup.enter="loginHandler">
                            </el-input>
                        </div>
                        <div class="login-btn">
                            <el-button type="primary" :loading="isLoading" @click="loginHandler">登 录</el-button>
                        </div>
                    </div>
                </div>
                <div class="login-bottom-tips">&copy; {{ year }} 版权所有</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getLoginInfo } from '@/api'
const year = new Date().getFullYear()
const userName = ref('')
const password = ref('')
const isLoading = ref(false)
const loginHandler = () => {
    isLoading.value = true
    setTimeout(() => {
        isLoading.value = false
    }, 1000)
}
</script>

<style lang="scss">
.login {
    width: 100%;
    height: 100%;
    min-height: 600px;
    overflow: hidden;
    height: 100%;
    background-size: cover;
    .login-logo {
        width: 100%;
        // background-color: #fff;
        height: 72px;
        line-height: 72px;
    }
    .login-bg {
        top: 0px;
        left: 0px;
        z-index: 0;
        width: 100%;
        height: 100vh;
        min-height: 600px;
        background: url('../../assets/images/login-bg.jpg') no-repeat 0 0;
        background-size: 100% 100%;
    }
    .login-wrap {
        position: absolute;
        top: 50%;
        right: 5%;
        margin-top: -200px;
        width: 470px;
        height: 400px;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0px 0px 35px 10px #eee;
        border-radius: 8px;
        .login-container {
            display: block;
            overflow: hidden;
            .login-bottom {
                opacity: 1;
                width: 100%;
                padding: 50px 40px;
                box-sizing: border-box;
            }
            .login-step {
                .login-item {
                    display: flex;
                    position: relative;
                    overflow: hidden;
                    margin-bottom: 20px;
                    line-height: 15px;
                    font-size: 0;
                    p {
                        width: 60px;
                        height: 40px;
                        line-height: 40px;
                        font-size: 14px;
                        color: #252a2c;
                        margin: 0;
                    }
                }
                .login-btn {
                    width: 100%;
                    margin-top: 40px;
                    .el-button {
                        width: 100%;
                    }
                }
            }
            .login-bottom-tips {
                width: 100%;
                font-size: 14px;
                color: #6c7b79;
                position: absolute;
                bottom: 30px;
                text-align: center;
            }
        }
    }
}

</style>
