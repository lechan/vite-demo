<template>
    <el-form :model="formData" :inline="true" size="mini">
        <el-form-item label="查询分类名称">
            <el-input v-model="formData.name" placeholder="请输入名称查询" clearable></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" :loading="isLoading" @click="handleSearch">查询</el-button>
        </el-form-item>
        <el-form-item style="float: right;">
            <el-button type="primary" @click="handleNew">新增分类</el-button>
        </el-form-item>
    </el-form>
    <el-table :data="tableData" max-height="480" size="mini" border>
        <el-table-column prop="name" label="分类名称"></el-table-column>
        <el-table-column label="操作" width="200">
            <template #default="scope">
                <el-button type="text" size="medium" @click="handleEdit(scope.row)">编辑</el-button>
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
    <el-dialog :title="(handleType === 'new' ? '新增' : '编辑') + '分类名称'" v-model="dialogFormVisible" :width="500" @close="handleCloseDialog">
        <el-form :model="dialogForm" size="small">
            <el-form-item label="分类名称">
                <el-input v-model="dialogForm.name" placeholder="请输入分类名称" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="handleSubmitDialog" size="small">确 定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Pagination from '@/components/Pagination.vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { setReactiveObject } from '@/utils'

const formData = reactive({
    name: ''
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
const handleType = ref('new')
const dialogFormVisible = ref(false)
const dialogForm = reactive({})
const handleNew = () => {
    handleType.value = 'new'
    dialogFormVisible.value = true
}
const handleEdit = data => {
    handleType.value = 'edit'
    dialogFormVisible.value = true
    setReactiveObject(dialogForm, data)
}
const handleDelete = () => {
    ElMessageBox.confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    })
    .then(() => {
        ElMessage({
            type: 'success',
            message: '删除成功!',
        })
    })
    .catch(() => {
        return false
    })
}

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
const resetDialog = () => {
    setReactiveObject(dialogForm, {})
}
const handleCloseDialog = () => {
    resetDialog()
}
const handleSubmitDialog = () => {
    dialogFormVisible.value = false
    resetDialog()
}
</script>

<style>

</style>