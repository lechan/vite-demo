<template>
    <nav class="header-app-nav">
        <el-menu
            :default-active="activeIndex"
            :router="true"
            :unique-opened="true"
            mode="vertical">
            <el-submenu
                v-for="item in menu"
                :index="String(item.id)"
                :key="item.id">
                <template #title>
                    <i
                        :class="item.icon || ''"
                        class="icon"></i> {{ item.name }}
                </template>
                <el-menu-item
                    v-for="child in item.children"
                    :key="child.id"
                    :index="child.url"
                >{{ child.name }}</el-menu-item>
            </el-submenu>
        </el-menu>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { menu } from '@/config'
const route = useRoute()
const activeIndex = route.path
</script>
<style lang="scss" scoped>
.header-app-nav {
    height: 100%;
    .el-menu {
        height: 100%;
    }
}
</style>
