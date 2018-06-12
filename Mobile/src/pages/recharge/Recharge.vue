<template>
    <div class="recharge">
        <crumbs  title="充值" :src="srcRec" :noBack="noB"></crumbs>
        <div :style="{marginTop:0.6+'rem'}">
            <SelectArrow :path="'/recharge/'+item.path" :title="item.title"  :logSrc="item.src" v-for="(item,index) in rechargeList" :key="index"></SelectArrow>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import SelectArrow from '../../components/selectArrow'
export default {
    name: 'register',
    data() {
        return {
            srcRec: require('../../assets/icons/icon-nav2.png'),
            noB:true,
            rechargeList:[
                {title:'在线充值',src:require('../../assets/icons/icon-onlineRecharge.png'),path:'onlineRecharge'},
                {title:'现金充值',src:require('../../assets/icons/icon-submitDeposit.png'),path:'submitDeposit'},
                {title:'点卡充值',src:require('../../assets/icons/icon-card2.png'),path:'cardRecharge'}
            ]
        }
    },
    methods: {

    },
    components:{
        SelectArrow
    }
}
</script>
