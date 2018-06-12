<template>
    <div class="footer-container">
        <ul>
            <li v-for="(item,index) in navs" @click="jump(item.path,index)" :key="index">
                <div class="item" v-if="index!==2">
                    <span :class="tagIdx===index?item.iconActive:item.icon"></span>
                    <!--{{item.name}}-->
                    <p :style="{color:tagIdx===index?'#08fd64':'#fff'}">{{tagIdx}}//{{index}}</p>
                </div>
                <div class="image" v-else>
                    <img :src="tagIdx===index?item.src:item.scrActive" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navs: [
                {name: '游戏', path: '/home', icon: 'icon-game', iconActive: 'icon-game-active'},
                {name: '优惠', path: '/activity', icon: 'icon-activity', iconActive: 'icon-activity-active'},
                {
                    src: require(`../assets/footer/enterGameSelected.png`),
                    scrActive: require(`../assets/footer/enterGame.png`)
                },
                {name: '充值', path: '/recharge', icon: 'icon-recharge', iconActive: 'icon-recharge-active'},
                {name: '账号', path: '/account', icon: 'icon-account', iconActive: 'icon-account-active'},
            ],
            tagIdx: 0
        }
    },
    methods: {
        jump(path, index) {
            console.log(this.tagIdx)
            if(this.tagIdx === index ) return false
            this.tagIdx = index
            if (index === 2) {  //进入开始游戏
                console.log('进入游戏')
            } else {
                this.$router.push(path)
            }
        }
    },
    mounted() {
    }
}
</script>
<style lang="scss" scoped>
    .footer-container {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1.6rem;
        color: #fff;
        font-weight: bold;
        background-color: #0b6db8;
        ul {
            display: flex;
            width: 100%;
            text-align: center;
            li {
                width: 18%;
                &:nth-child(3) {
                    flex: 1;
                }
                .item {
                    overflow: hidden;
                    span {
                        display: block;
                        width: 25px;
                        height: 25px;
                        margin: .3rem auto .1rem;
                    }
                    .icon-game {
                        background: url("../assets/footer/game.png") no-repeat center;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                    }
                    .icon-game-active {
                        background: url("../assets/footer/gameSelected.png") no-repeat center;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                    }
                    .icon-activity {
                        background: url("../assets/footer/promotion.png") no-repeat center;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                    }
                    .icon-activity-active {
                        background: url("../assets/footer/promotionSelected.png") no-repeat center;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                    }
                    .icon-recharge {
                        background: url("../assets/footer/cashInOrOut.png") no-repeat center;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                    }
                    .icon-recharge-active {
                        background: url("../assets/footer/cashInOrOutSelected.png") no-repeat center;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                    }
                    .icon-account {
                        background: url("../assets/footer/account.png") no-repeat center;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                    }
                    .icon-account-active {
                        background: url("../assets/footer/accountSelected.png") no-repeat center;
                        -webkit-background-size: 100% 100%;
                        background-size: 100% 100%;
                    }
                }
            }
        }
        .image {
            position: relative;
            flex: 1;
            text-align: center;
            img {
                margin-top: -25%;
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
