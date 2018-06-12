<template>
    <div class="accountInfo">
        <crumbs  title="账户资料" :src="src"></crumbs>
        <div class="form_box">
            <h5>账户资料</h5>
            <div class="item disable">
                <label  flex="cross:center box:first">
                    <div class="name">会员账号</div>
                    <span>steshthak</span>
                </label>
            </div>
            <div class="item disable">
                <label  flex="cross:center box:first">
                    <div class="name">会员等级</div>
                    <span>普通会员</span>
                </label>
            </div>
            <div class="sureBtn">
                <label  flex="cross:center box:first">
                    <div>联系电话</div>
                    <span>138****5854</span>
                </label>
                <button @click="updatePhoneNo">更换</button>
            </div>
            <div class="item disable">
                <label  flex="cross:center box:first">
                    <div class="name">QQ账号</div>
                    <span>465454545644</span>
                </label>
            </div>
            <div class="item disable">
                <label  flex="cross:center box:first">
                    <div class="name">开户时间</div>
                    <span>2018-12-21 11:04:14</span>
                </label>
            </div>

            <h5 class="top">提款银行资料</h5>
            <div class="item">
                <label   flex="cross:center box:first">
                    <div class="name">收款人</div>
                    <input type="text"  placeholder="请输入">
                </label>
            </div>
            <div class="item">
                <label   flex="cross:center box:first">
                    <div class="name">银行账号</div>
                    <input type="text"  placeholder="请输入">
                </label>
            </div>
            <div class="item">
                <label   flex="cross:center box:first">
                    <div class="name">银行名称</div>
                    <select>
                        <option value="">123</option>
                    </select>
                </label>
            </div>

            <div class="item">
                <label   flex="cross:center box:first">
                    <div class="name">借记卡</div>
                    <select>
                        <option value="">123</option>
                    </select>
                </label>
            </div>

            <div class="item">
                <label   flex="cross:center box:first">
                    <div class="name">开户城市</div>
                    <input type="text"  placeholder="请输入">
                </label>
            </div>

            <div class="item">
                <label   flex="cross:center box:first">
                    <div class="name">开户分行</div>
                    <input type="text"  placeholder="请输入">
                </label>
            </div>

            <div class="item" flex="box:last">
                <label  flex="cross:center box:first">
                    <div class="name">验证码</div>
                    <input type="text" placeholder="输入验证码" maxlength="4">
                </label>
                <div class="right_box"><img src="" alt=""></div>
            </div>

            <div class="item" flex="box:last">
                <label  flex="cross:center box:first">
                    <div class="name">短信验证</div>
                    <input type="text" placeholder="输入验证码" maxlength="4">
                </label>
                <div class="right_box">
                    <button>获取</button>
                    <p>
                        <a href="##">收不到？</a>
                    </p>
                </div>
            </div>

            <div class="btn">确认修改</div>

            <h5 class="top">客户ID</h5>
            <div class="item disable">
                <label  flex="cross:center box:first">
                    <div class="name">客户ID</div>
                    <span>46545</span>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AccountInfo",
    data(){
        return{
            src:require('../../assets/icons/icon-acc1.png')
        }
    },
    methods:{
        updatePhoneNo(){
            this.$router.push({
                path:"/account/accountInfo/updatePhoneNo"
            })
        }
    }
}
</script>

<style scoped>

</style>
