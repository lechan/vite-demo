<template>
    <div
        class="main-wrap">
        <main-header></main-header>
        <div class="nav-wrap isfixed">
            <side-nav></side-nav>
        </div>
        <div class="content-wrap content-user">
            <breadcrumb :list="breadCrumbList"></breadcrumb>
            <div class="content">
                <transition
                    name="fade"
                    mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>

<script>
import MainHeader from './header.vue'
import SideNav from './nav.vue'
import breadcrumb from './breadcrumb.vue'
import MainFooter from './footer.vue'

export default {
    name: 'Layout',
    components: {
        MainHeader,
        SideNav,
        breadcrumb,
        MainFooter
    },
    data() {
        return {
            breadCrumbList: [{name: '人员管理'}]
        }
    }
}
</script>

<style>
</style>
