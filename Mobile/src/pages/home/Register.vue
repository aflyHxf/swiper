<template>
    <div class="register">
        <crumbs backName="首页" title="创建新用户" :src="src"></crumbs>
        <div class="form_box">
            <p>注册信息</p>
            <div class="item">
                <label  flex="cross:center box:first">
                    <div class="name">注册帐号</div>
                    <input type="text" v-model="sendData.name" placeholder="6-10位" maxlength="10">
                </label>
            </div>
            <div class="item">
                <label   flex="cross:center box:first">
                    <div class="name">密码</div>
                    <input type="text" placeholder="6-16位" maxlength="16">
                </label>
            </div>
            <div class="item">
                <label   flex="cross:center box:first">
                    <div class="name">确认密码</div>
                    <input type="text" placeholder="重复输入您的密码" maxlength="16">
                </label>
            </div>
        </div>
        <div class="form_box">
            <p>个人信息</p>
            <div class="item">
                <label   flex="cross:center box:first">
                    <div class="name">QQ账号</div>
                    <input type="text" placeholder="输入您的QQ账号" maxlength="15">
                </label>
            </div>
            <div class="item">
                <label   flex="cross:center box:first">
                    <div class="name">手机号码</div>
                    <input type="text" v-model="sendData.phoneNumber" placeholder="输入您的手机号码" maxlength="11">
                </label>
            </div>
            <div class="item" flex="box:last">
                <label  flex="cross:center box:first">
                    <div class="name">验证码</div>
                    <input type="text" placeholder="输入验证码" maxlength="4">
                </label>
                <div class="right_box" @click="changeSrc"><img :src="captchaSrc" alt=""></div>
            </div>
            <div class="item" flex="box:last">
                <label  flex="cross:center box:first">
                    <div class="name">短信验证</div>
                    <input type="text" placeholder="输入验证码" maxlength="4">
                </label>
                <div class="right_box" flex="box:first">
                    <div class="get_code btn" @click="getCode">
                        <span style="color:red" v-if="reciprocal">({{reciprocal}}s)</span>
                        <span v-else>获取</span>
                    </div>
                    <a :href="platform.csUrl" target="_bank">收不到?</a>
                </div>
            </div>
            <div class="item">
                <div class="btn">确认开户</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'register',
    data () {
        return {
            src:require('../../assets/icons/icon_register.png'),
            captchaSrc:'',
            reciprocal:0,
            sendData:{
                phoneNumber:null,
                name:'',
            }
        }
    },
    methods:{
        changeSrc(){
            this.$api.captcha().then(data=>{
                this.captchaSrc = this.$tool.arrayBufferToBase64(data.data.data);
            })
        },
        reciprocalFun(){
            this.reciprocal = 60;
            let countDown = setInterval(()=>{
                this.reciprocal--
                if(this.reciprocal ==0){
                    clearInterval(countDown)
                }
            },1000)
        },
        getCode(){
            if(this.reciprocal)return;
            this.$api.getSMSCode({phoneNumber:this.sendData.phoneNumber,purpose:"registration",name:this.sendData.name}).then(res=>{
                this.reciprocalFun();
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
