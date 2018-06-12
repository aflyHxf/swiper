<template>
    <div class="SMSNotice">
        <crumbs  title="设置短信通知" :src="src"></crumbs>
        <SlideBtn :smsData="smsData"></SlideBtn>
        <div class="btn" style="margin-bottom: 0.2rem">确认修改</div>
    </div>
</template>

<script>
import SlideBtn from  '../../components/slideBtn'
export default {
    name: "SMSNotice",
    data(){
        return{
            src:require('../../assets/icons/icon-acc4.png'),
            smsData:[
                {content:'手工存款',status:false},
                {content:'手工提款',status:false},
                {content:'洗码优惠',status:false},
                {content:'促销优惠',status:false},
                {content:'修改密码',status:false},
                {content:'银改',status:false},
                {content:'取消提款',status:false},
            ]
        }
    },
    components:{
        SlideBtn
    }
}
</script>
