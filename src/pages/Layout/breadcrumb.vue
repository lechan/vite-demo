<template>
    <div class="breadcrumb-wrap">
        <el-breadcrumb separator="/">
            <i class="el-icon-location"></i>
            <el-breadcrumb-item
                v-for="(item, index) in currentBreadcrumb"
                :key="index"
            >{{ item.name }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { menu } from '@/config'
const route = useRoute()
const currentBreadcrumb = ref([])
watchEffect(() => {
    const currentUrl = route.path
    menu.forEach(item => {
        item.children.forEach(subItem => {
            if (subItem.url === currentUrl) {
                currentBreadcrumb.value = [{
                    name: item.name
                }, {
                    name: subItem.name
                }]
            }
        })
    })
})

</script>

<style lang="scss">
.breadcrumb-wrap {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    margin-left: 20px;
    vertical-align: middle;
    .el-breadcrumb {
        line-height: 50px;
    }
    .el-icon-location {
        float: left;
        margin-right: 5px;
        line-height: 50px;
        font-size: 16px;
    }
}
</style>
