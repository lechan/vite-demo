<template>
    <el-form :model="formData" :inline="true" size="mini">
        <el-form-item label="名称">
            <el-input v-model="formData.name" placeholder="请输入名称" clearable></el-input>
        </el-form-item>
        <el-form-item label="状态">
            <el-select v-model="formData.status" placeholder="请选择状态" clearable>
                <el-option label="启用" value="active"></el-option>
                <el-option label="停用" value="inactive"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="分类">
            <el-select v-model="formData.category" placeholder="请选择分类" clearable filterable>
                <el-option v-for="(item, index) in category" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="库存">
            <el-select v-model="formData.storage" placeholder="请选择库存" clearable>
                <el-option label="有" :value="1"></el-option>
                <el-option label="无" :value="0"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="简写">
            <el-input v-model="formData.shortcut" placeholder="请输入简写" clearable></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" :loading="isLoading" @click="handleSearch">查询</el-button>
        </el-form-item>
    </el-form>
    <el-table :data="tableData" max-height="480" size="mini" border>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column prop="price" label="价格下限"></el-table-column>
        <el-table-column prop="price" label="价格上限"></el-table-column>
        <el-table-column prop="price" label="库存"></el-table-column>
        <el-table-column label="操作" width="250">
            <template #default="scope">
                <el-button type="text" size="medium" @click="handleView(scope.row)">查看产品</el-button>
                <el-button type="text" size="medium" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button type="text" size="medium" @click="handleShelves(scope.row)">上架</el-button>
                <el-button type="text" size="medium" @click="handleStop(scope.row)">停用</el-button>
                <el-button type="text" size="medium" @click="handleDelete(scope.row)">删除</el-button>
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
import { reactive, ref } from 'vue'
import Pagination from '@/components/Pagination.vue'

const category = ref([{
    label: 'a',
    value: 'a'
}, {
    label: 'b',
    value: 'b'
}, {
    label: 'c',
    value: 'c'
}])
const formData = reactive({
    name: '',
    status: '',
    category: '',
    shortcut: ''
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
const handleView = () => {}
const handleEdit = () => {}
const handleDelete = () => {}
const handleShelves = () => {}
const handleStop = () => {}

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