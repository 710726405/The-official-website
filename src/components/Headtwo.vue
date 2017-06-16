<style>
    .head {
        height: 680px;
        width: 100%;
        /*background: red;*/
    }

    .head, .content, .adv-f5, .exh-f3, .foot {

    }

    .nav {
        position: absolute;
        z-index: 999;
        top: 0;
        display: flex;
        justify-content: space-around;
        width: 100%;
        background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(72, 182, 232, 0.1)), to(rgba(71, 227, 193, 0.1)), color-stop(1.0, #336600));
        height: 70px;
        color: rgba(225, 225, 225, 1);
        opacity: 1;
    }

    .logo {
        opacity: 1;
        display: flex;
        justify-content: space-around;
        font-size: 30px;
        align-items: center;
        color: rgba(255, 255, 255, 1);
    }

    .logo img {
        margin-right: 19px;
        width: 56px;
        height: 56px;
    }

    .nav-con {
        opacity: 1;
        display: flex;
        justify-content: space-around;
    }

    .nav-con div a{
        box-sizing: border-box;
        padding-right: 90px;
        height: 100%;
        line-height: 70px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        font-size: 16px;
    }

    .banner {
        position: relative;
        height: 100%;
        width: 100%;
        background-image: url("~assets/img/bg.png");
        /*background-color: #f90;*/
        background-size: cover;
    }

    .banner-top {
        position: absolute;
        /*top: 22.74%;*/
        top: 18.22%;
        left: 23.125%;
        color: white;
        text-align: left;
    }

    .banner-top p:first-child {
        height: 86px;;
        font-size: 86px;

    }

    .banner-top p:nth-child(2) {
        height: 36px;
        margin-top: 45px;
        font-size: 36px;
    }

    .banner-top p:last-child {
        margin-top: 20px;
        height: 28px;
        font-size: 28px;
    }

    .banner-btm {
        background: rgba(10, 114, 146, 0.33);
        width: 100%;
        height: 110px;
        position: absolute;
        bottom: 0;
    }

    .banner-btm .yellow {
        width: 40.99%;
        background: #ffcc01;
        height: 110px;

    }

    .banner-btm .blue {
        float: right;
        margin: 0 6.61%;
    }
</style>
<template>
    <div>
        <div class="head">
            <div class="nav">
                <div class="logo">
                    <img src="~assets/img/Hlogo.png" alt="logo">
                    <div>轻氧</div>
                </div>
                <div class="nav-con">
                    <div>
                        <router-link to="/">首页</router-link>
                    </div>
                    <div>
                        <router-link to="/content">智能洗衣</router-link>
                    </div>
                    <div>
                        <router-link to="/cooperation">商业合作</router-link>
                    </div>
                    <div>
                        <router-link to="/about_me">关于我们</router-link>
                    </div>
                </div>
            </div>
            <div class="banner">
                <div class="banner-top">
                    <p>轻氧智能洗衣</p>
                    <p>WASHING INTELLIGENTLY</p>
                    <!--<p>DEVOTO TO BUILD INTELLIGENT CAMPUS</p>-->
                </div>
                <div class="banner-btm">
                    <div class="yellow">
                        <!--ffcc01-->
                        <div class="blue">
                            <img src="~assets/img/qyznxy.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="javascript">
    export default {

    }
</script>
