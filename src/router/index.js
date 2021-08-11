import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '../pages/404/index.vue'
import Login from '../pages/Login/index.vue'
import Layout from '../pages/Layout/index.vue'
import InventoryCategory from '../pages/Inventory/Category/index.vue'
import InventoryProduct from '../pages/Inventory/Product/index.vue'
import InventoryOrder from '../pages/Inventory/Order/index.vue'
import ReportKey from '../pages/Report/Key/index.vue'
import ReportSales from '../pages/Report/Sales/index.vue'
import SystemOperationLog from '../pages/System/OperationLog/index.vue'
import SystemPriceLog from '../pages/System/PriceLog/index.vue'
import SystemUsers from '../pages/System/Users/index.vue'

const routes = [{
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
}, {
    path: '/login',
    name: 'login',
    component: Login
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