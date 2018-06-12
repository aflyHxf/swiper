<template>
    <div class="header-container">
        <div class="left">
            <span :class="title?'icon-back':'icon-cs'" class="icon"></span>
            <span class="text">{{title?'返回':'客服'}}</span>
        </div>
        <div class="middle">
            <img src="../assets/header/logo.png" alt="" v-if="!title">
            <span v-else>{{title}}</span>
        </div>
        <div class="side right" v-if="!title">
            <span>注册 </span>/
            <span>登录</span>
        </div>
    </div>
</template>

<script>
export default {
    //当显示logo时，即头部标题为空，左边显示客服，右边显示注册/登录
    //否则，左边显示返回，右边为空
    props: {
        title: { //title：头部标题，默认为空,没有时显示logo
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
    $url: "../assets/icons/";
    .header-container {
        position: absolute;
        display: flex;
        top: 0;
        width: 100%;
        height: 1rem;
        color: #fff;
        padding: 0 2rem;
        line-height: 1rem;
        justify-content: space-between;
        background-color: rgb(12, 108, 185);
        .left {
            position: absolute;
            top: 0;
            left: 0.3rem;
            width: 2rem;
            height: 100%;
            .icon {
                display: inline-block;
                margin-right: 0.1rem;
                vertical-align: middle;
            }
            .icon-cs {
                width: .47rem;
                height: .53rem;
                background: url("../assets/header/cs.png") no-repeat;
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
            }
            .icon-back {
                width: .42rem;
                height: .42rem;
                background: url("../assets/header/back.png") no-repeat;
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
            }
        }
        .middle {
            width: 100%;
            height: 100%;
            padding-right: 0.1rem;
            text-align: center;
            overflow: hidden;
            img {
                height: 100%;
            }
            span {
                font-size: 16px;
                font-weight: bold;
            }
        }
        .right {
            position: absolute;
            top: 0;
            right: 0.2rem;
            text-align: center;
            font-size: 16px;
        }
        .navs {
            position: relative;
            z-index: 100;
            height: 100%;
            .item {
                height: 100%;
                span {
                    display: block;
                    height: 100%;
                    background: no-repeat left center;
                    background-size: 0.48rem auto;
                    padding-left: 0.58rem;
                    color: #fff;
                    font-size: 0.28rem;
                    line-height: 1rem;
                    &.icon_tel {
                        background-image: url($url+ "icon_tel.png");
                    }
                    &.icon_message {
                        background-image: url($url+ "icon_message.png");
                    }
                    &.icon_login {
                        background-image: url($url+ "icon_login.png");
                    }
                    &.icon_register {
                        background-image: url($url+ "icon_register.png");
                        color: #f0d164
                    }
                    &.icon_logout {
                        background-image: url($url+ "icon_logout.png");
                    }
                    &.icon_tel_a {
                        background-image: url($url+ "icon_tel_a.png");
                        color: #f0d164
                    }
                }
                img {
                    height: 0.9rem;
                }
            }
        }

    }
</style>
