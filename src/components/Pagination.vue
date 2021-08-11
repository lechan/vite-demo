<template>
    <el-pagination
        class="pagination-wrap"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
    </el-pagination>
</template>

<script setup>
defineProps({
    currentPage: {
        type: Number,
        default: 1
    },
    pageSize: {
        type: Number,
        default: 10
    },
    totalCount: {
        type: Number,
        default: 0
    }
})
const emit = defineEmits(['handleChangeCurrentPage', 'handleChangePageSize'])

const handleSizeChange = pageSize => {
    emit('handleChangePageSize', pageSize)
}

const handleCurrentChange = currentPage => {
    emit('handleChangeCurrentPage', currentPage)
}
</script>

<style lang="scss" scoped>
.pagination-wrap {
    margin-top: 20px;
}
</style>