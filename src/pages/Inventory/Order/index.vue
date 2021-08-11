<template>
    <el-form :model="formData" :inline="true" size="mini">
        <el-form-item label="订单号">
            <el-input v-model="formData.id" placeholder="请输入订单号查询" clearable></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" :loading="isLoading" @click="handleSearch">查询</el-button>
        </el-form-item>
    </el-form>
    <el-table :data="tableData" max-height="480" size="mini" border>
        <el-table-column prop="id" label="订单号"></el-table-column>
        <el-table-column prop="status" label="订单状态"></el-table-column>
        <el-table-column prop="status" label="交易时间"></el-table-column>
        <el-table-column prop="status" label="预定编号"></el-table-column>
        <el-table-column prop="status" label="预定状态"></el-table-column>
        <el-table-column prop="status" label="预定时间"></el-table-column>
        <el-table-column label="操作" width="200">
            <template #default="scope">
                <el-button type="text" size="medium" @click="handleDetail(scope.row)">查看详情</el-button>
            </template>
        </el-table-column>
    </el-table>
    <pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :total-count="totalCount"
        @handle-change-current-page="handleChangeCurrentPage"
        @handle-change-page-size="handleChangePageSize"
    ></pagination>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Pagination from '@/components/Pagination.vue'

const formData = reactive({
    id: ''
})
const isLoading = ref(false)
const tableData = ref([{
    id: 1,
    name: 'GOOGLEUSD'
}, {
    id: 2,
    name: 'GOOGLEUSD'
}, {
    id: 3,
    name: 'GOOGLEUSD'
}, {
    id: 4,
    name: 'GOOGLEUSD'
}, {
    id: 4,
    name: 'GOOGLEUSD'
}, {
    id: 4,
    name: 'GOOGLEUSD'
}, {
    id: 4,
    name: 'GOOGLEUSD'
}, {
    id: 4,
    name: 'GOOGLEUSD'
}, {
    id: 4,
    name: 'GOOGLEUSD'
}, {
    id: 4,
    name: 'GOOGLEUSD'
}])

const handleSearch = () => {
    isLoading.value = true
    setTimeout(() => {
        isLoading.value = false
    }, 1000)
}
const handleDetail = () => {}

const currentPage = ref(1)
const pageSize = ref(10)
const totalCount = ref(100)

const handleChangeCurrentPage = value => {
    currentPage.value = value
}
const handleChangePageSize = value => {
    pageSize.value = value
    currentPage.value = 1
}
</script>

<style>

</style>