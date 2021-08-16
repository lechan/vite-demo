<template>
    <div class="not-found-page">
        <h1>404</h1>
        <h2><router-link to="/login">回到登录页</router-link></h2>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.not-found-page{
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0px;
    text-align: center;
    h1{
        font-size: 100px;
        margin: 0px;
    }
    h2{
        font-weight: normal;
        font-size: 20px;
        color: #aaa;
        a {
            color: #bbb;
        }
    }
}
</style>
