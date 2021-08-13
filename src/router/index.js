import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('../pages/Login/index.vue')
const NotFound = () => import('../pages/404/index.vue')
const Layout = () => import('../pages/Layout/index.vue')
const InventoryCategory = () => import('../pages/Inventory/Category/index.vue')
const InventoryProduct = () => import('../pages/Inventory/Product/index.vue')
const InventoryOrder = () => import('../pages/Inventory/Order/index.vue')
const ReportKey = () => import('../pages/Report/Key/index.vue')
const ReportSales = () => import('../pages/Report/Sales/index.vue')
const SystemOperationLog = () => import('../pages/System/OperationLog/index.vue')
const SystemPriceLog = () => import('../pages/System/PriceLog/index.vue')
const SystemUsers = () => import('../pages/System/Users/index.vue')

const routes = [{
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
}, {
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '/',
    redirect: '/login'
}, {
    path: '/manage',
    component: Layout,
    children: [{
        path: 'inventory/category',
        name: 'InventoryCategory',
        component: InventoryCategory
    }, {
        path: 'inventory/product',
        name: 'InventoryProduct',
        component: InventoryProduct
    }, {
        path: 'inventory/order',
        name: 'InventoryOrder',
        component: InventoryOrder
    }, {
        path: 'report/key',
        name: 'ReportKey',
        component: ReportKey
    }, {
        path: 'report/sales',
        name: 'ReportSales',
        component: ReportSales
    }, {
        path: 'system/operation',
        name: 'SystemOperationLog',
        component: SystemOperationLog
    }, {
        path: 'system/price',
        name: 'SystemPriceLog',
        component: SystemPriceLog
    }, {
        path: 'system/users',
        name: 'SystemUsers',
        component: SystemUsers
    }]
}]

export default createRouter({
    history: createWebHistory(),
    routes
})