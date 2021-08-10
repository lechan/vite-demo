import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '../pages/404/index.vue'
import Login from '../pages/Login/index.vue'
import Layout from '../pages/Layout/index.vue'
import InventoryCategory from '../pages/Inventory/Category/index.vue'
import InventoryProduct from '../pages/Inventory/Product/index.vue'
import InventoryOrder from '../pages/Inventory/Order/index.vue'

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
        path: '/inventory/category',
        name: 'InventoryCategory',
        component: InventoryCategory
    }, {
        path: '/inventory/product',
        name: 'InventoryProduct',
        component: InventoryProduct
    }, {
        path: '/inventory/order',
        name: 'InventoryOrder',
        component: InventoryOrder
    }]
}]

export default createRouter({
    history: createWebHistory(),
    routes
})