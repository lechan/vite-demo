<template>
    <div
        class="main-wrap">
        <main-header></main-header>
        <div class="nav-wrap isfixed">
            <side-nav></side-nav>
        </div>
        <div class="content-wrap">
            <breadcrumb :list="breadCrumbList"></breadcrumb>
            <div class="content">
                <router-view></router-view>
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

<style lang="scss">
.main-wrap {
    position: relative;
    width: 100%;
    min-width: 1300px;
    overflow: hidden;
    .nav-wrap {
        width: 220px;
        height: 100%;
        position: absolute;
        top: 60px;
        left: 0;
        z-index: 10;
        overflow: hidden;
        &.isfixed {
            position: fixed;
        }
    }
    .content-wrap {
        margin-left: 220px;
        min-height: calc(100vh - 60px);
        padding-top: 60px;
        background: #fff;
        .content {
            position: relative;
            padding: 0px 20px 60px 20px;
            overflow: hidden;
            clear: both;
        }
    }
}
</style>
