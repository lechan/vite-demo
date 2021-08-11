<template>
    <div class="login-info">
        <div class="login-info-wrap">
            <el-popover
                placement="bottom-end"
                :width="180"
                trigger="hover"
            >
                <template #reference>
                    <div style="cursor: pointer;">
                        <div class="avatar"><el-avatar :size="25" icon="el-icon-user-solid"></el-avatar></div>
                        <div class="user-info"><span>{{ userName }}</span><i class="el-icon-caret-bottom"></i></div>
                    </div>
                </template>
                <div class="logout-btn">
                    <el-button size="mini" type="primary" icon="el-icon-key" @click="handlePasswordDialog">修改密码</el-button>
                    <el-button size="mini" type="danger" icon="el-icon-circle-close" @click="handleLogout">退出</el-button>
                </div>
            </el-popover>
        </div>
    </div>
</template>

<script setup>
import { getLogout } from '@/api'
const userName = localStorage.getItem('userName') || '游客'
const handleLogout = () => {
    getLogout().then(res => {
        if (res.code === 0) {
            localStorage.clear()
            setTimeout(() => {
                this.$router.replace({
                    name: 'login'
                })
            }, 500)
        } else {
            this.$message({
                type: 'error',
                message: res.msg
            })
        }
    })
}
const handlePasswordDialog = () => {}
</script>

<style lang="scss">
.login-info {
    position: absolute;
    right: 20px;
    top: 15px;
    padding: 5px 0px 5px 50px;
    .link-button {
        display: inline-block;
        vertical-align: middle;
        a {
            text-decoration: none;
            color: #fff;
            font-size: 14px;
            margin-right: 10px;
        }
    }
    .login-info-wrap {
        display: inline-block;
        height: 40px;
    }
    .user-info {
        display: inline-block;
        vertical-align: middle;
        span {
            font-size: 14px;
            color: #fff;
        }
        i {
            display: inline-block;
            margin-left: 4px;
            vertical-align: middle;
            font-size: 16px;
            color: #fff;
        }
    }
    .avatar {
        display: inline-block;
        width: 25px;
        height: 25px;
        overflow: hidden;
        vertical-align: middle;
        color: #fff;
        margin-right: 10px;
    }
    .logout-btn {
        position: absolute;
        top: 28px;
        right: 0px;
        z-index: 1;
        padding: 10px 0px;
        border-radius: 4px;
        font-size: 14px;
        vertical-align: top;
        background: #fff;
        overflow: hidden;
        button {
            display: block;
            width: 100px;
            height: 34px;
            line-height: 30px;
            padding: 0px 10px;
            background: none;
            color: #333333;
            border: none;
            cursor: pointer;
            text-align: left;
            &:hover {
                background: #eefaf8;
            }
            i {
                font-size: 12px;
                margin-right: 5px;
                vertical-align: top;
            }
        }
    }
}
</style>
