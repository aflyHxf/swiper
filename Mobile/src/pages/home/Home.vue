<template>
    <div class="home-container">
        <Header></Header>
        <!--一大张背景图包含两按钮-->
        <div class="bg-image">
            <div class="button">
                <span></span>
                <span></span>
            </div>
        </div>
        <!--游戏公告-->
        <div class="game-notice">
            <div class="notice-content">
                <div>
                    <span><i></i> 游戏公告：</span>
                </div>
                <div class="swiper-content">
                    <p>尊贵的会员您好，首次充值赠送100%丰厚礼金，存越多送越多！伟大的航海会员，欢迎您的加入，目前开户即可获赠18元起航礼金，一同来征服大海！</p>
                </div>
            </div>
        </div>
        <!--进入游戏背景图-->
        <div class="enter-game">
            <div class="image">
                <div class="mark">进入游戏</div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from 'components/Header'
import Footer from 'components/Footer'

export default {
    data() {
        return {}
    },
    created() {

    },
    methods: {},
    watch: {},
    components: {
        Header,
        Footer
    }
}
</script>
<style lang="scss" scoped>
    .home-container {
        width: 100%;
        height: 100%;
        padding-top: 1rem;
        .bg-image {
            position: relative;
            width: 100%;
            height: 4.4rem;
            background: url("../../assets/home/banner.jpg") no-repeat;
            background-size: 100% 100%;
            .button {
                position: absolute;
                bottom: 0.1rem;
                left: 1.6rem;
                width: 2rem;
                height: 2rem;
                span {
                    display: block;
                    width: 2.11rem;
                    height: .71rem;
                    margin-top: 0.18rem;
                    &:first-child {
                        background: url("../../assets/home/bannerSignup.png") no-repeat;
                        background-size: 100% 100%;
                    }
                    &:last-child {
                        background: url("../../assets/home/bannerDownload.png") no-repeat;
                        background-size: 100% 100%;
                    }
                }
            }
        }
        .game-notice {
            height: 1rem;
            background: #239afe;
            padding: 0 .2rem;
            overflow: hidden;
            .notice-content {
                position: relative;
                display: flex;
                width: 100%;
                height: .6rem;
                line-height: .6rem;
                margin: .2rem auto;
                color: #fff;
                border-radius: 100px;
                background-color: #057fe4;
                font-size: 14px;
                padding-left: .8rem;
                i{
                    position: absolute;
                    top: 50%;
                    left: 0.25rem;
                    width: .46rem;
                    height: .42rem;
                    transform: translate3d(0,-50%,0);
                    background: url("../../assets/home/dot.png") no-repeat;
                    background-size: 100% 100%;
                }
                .swiper-content{
                    position: relative;
                    flex: 1;
                    overflow: hidden;
                    p{
                        padding: 0 2rem 0 4.5rem;
                        top: 0;
                        left: 0;
                        position: absolute;
                        white-space: nowrap;
                        animation: moveLeft 15s  linear 1s infinite;
                    }
                }
            }
        }
        .enter-game{
            width: 100%;
            background-color: #fff;
            height: 6rem;
            padding: 0.2rem;
            overflow: hidden;
            .image{
                position: relative;
                width: 100%;
                height: 4.4rem;
                margin-top: 0.2rem;
                background: url("../../assets/home/game.jpg") no-repeat 50%;
                background-size: cover;
                .mark{
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 1rem;
                    line-height: 1rem;
                    text-align: center;
                    color: #fff;
                    font-size:16px;
                    background: rgba(0,0,0,.7);
                }
            }
        }
    }

    @keyframes moveLeft {
        from{
            transform: translateX(0);
        }
        to{
            transform: translateX(-100%);
        }
    }
</style>
