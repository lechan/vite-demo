export const menu = [{
    id: 1,
    name: '库存管理',
    icon: 'el-icon-box',
    children: [{
        id: 11,
        name: '分类管理',
        url: '/manage/inventory/category'
    }, {
        id: 12,
        name: '产品管理',
        url: '/manage/inventory/product'
    }, {
        id: 13,
        name: '订单管理',
        url: '/manage/inventory/order'
    }]
}, {
    id: 2,
    name: '报表管理',
    icon: 'el-icon-s-data',
    children: [{
        id: 21,
        name: 'Key统计',
        url: '/manage/report/key'
    }, {
        id: 22,
        name: '销量统计',
        url: '/manage/report/sales'
    }]
}, {
    id: 3,
    name: '系统管理',
    icon: 'el-icon-setting',
    children: [{
        id: 31,
        name: '用户管理',
        url: '/manage/system/users'
    }, {
        id: 32,
        name: '改价日志',
        url: '/manage/system/price'
    }, {
        id: 33,
        name: '用户行为日志',
        url: '/manage/system/operation'
    }]
}]
