<template>
    <div class="register">
        <crumbs backName="首页" title="登录" :src="src"></crumbs>
        <div class="form_box">
            <div class="item">
                <label  flex="cross:center box:first">
                    <div class="name">用户名</div>
                    <input type="text" v-model="sendData.name" placeholder="请输入您的用户名" maxlength="10">
                </label>
            </div>
            <div class="item">
                <label   flex="cross:center box:first">
                    <div class="name">密码</div>
                    <input type="text" v-model="sendData.password" placeholder="请输入您的密码" maxlength="16">
                </label>
            </div>

            <div class="item" flex="box:last">
                <label  flex="cross:center box:first">
                    <div class="name">验证码</div>
                    <input type="text" placeholder="输入验证码" maxlength="4">
                </label>
                <div class="right_box" @click="changeSrc"><img :src="captchaSrc" alt=""></div>
            </div>

            <div class="btn">登入</div>
            <div class="btn_black">忘记密码</div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'register',
    data () {
        return {
            src:require('../../assets/icons/icon-login2.png'),
            captchaSrc:'',
            reciprocal:0,
            sendData:{
                name:'',
                password:''
            }
        }
    },
    methods:{
        changeSrc(){
            this.$api.captcha().then(data=>{
                this.captchaSrc = this.$tool.arrayBufferToBase64(data.data.data);
            })
        }
    },
    mounted(){
        this.changeSrc();
    },
    computed:{
        ...mapState(['platform'])
    }
}
</script>
<style lang="scss" scoped>
    .register{

    }
</style>
