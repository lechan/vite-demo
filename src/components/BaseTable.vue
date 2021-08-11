<template>
    <el-table
        :data="tableData"
        border>
            <el-table-column
                v-for="(item, index) in tableColumnData"
                :key="index"
                :prop="item.prop"
                :label="item.label"
                :width="item.width || 'auto'">
            </el-table-column>
    </el-table>
</template>

<script setup>
defineProps({
    tableColumnData: {
        type: Array,
        default: () => []
    },
    tableData: {
        type: Array,
        default: () => []
    }
})
</script>

<style scoped>
</style>
