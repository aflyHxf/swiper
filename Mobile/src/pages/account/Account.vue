<template>
    <div class="account">
        <crumbs  title="账户" :src="src" :noBack="noB"></crumbs>
        <div :style="{marginTop:0.6+'rem'}">
            <SelectArrow :path="'/account/'+item.path" :title="item.title"  :logSrc="item.src" v-for="(item,index) in rechargeList" :key="index"></SelectArrow>
        </div>
    </div>
</template>

<script>
import SelectArrow from '../../components/selectArrow'
export default {
    name: 'home',
    data () {
        return {
            src:require('../../assets/icons/icon-nav4.png'),
            noB:true,
            rechargeList:[
                {title:'账户资料',src:require('../../assets/icons/icon-acc0.png'),path:'accountInfo'},
                {title:'游戏转账',src:require('../../assets/icons/icon-acc1.png'),path:'gameTransfer'},
                {title:'记录搜索',src:require('../../assets/icons/icon-acc2.png'),path:'recordSearch'},
                {title:'修改密码',src:require('../../assets/icons/icon-acc3.png'),path:'modifyPassword'},
                {title:'设置短信通知',src:require('../../assets/icons/icon-acc4.png'),path:'SMSNotice'},
                {title:'提前结算洗码',src:require('../../assets/icons/icon-acc5.png'),path:'washCodePreferential'},
            ]
        }
    },
    components:{
        SelectArrow
    }

}
</script>
