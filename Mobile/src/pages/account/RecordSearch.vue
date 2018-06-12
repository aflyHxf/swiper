<template>
    <div class="recordSearch">
        <crumbs  title="记录搜索" :src="src"></crumbs>
        <TagList :gameData="gameList" @change-name="showName"></TagList>

        <div class="form_box">
            <div class="item">
                <label  flex="cross:center box:first">
                    <div class="name">{{searchType}}</div>
                    <select>
                        <option>123</option>
                    </select>
                </label>
            </div>

            <div class="item time">
                <label>
                    <div class="name">开始时间</div>
                    <input type="date" :value="nowDates[0]" ref="boxx">
                    <select>
                        <option v-for="(item,index) in hours" :value="item" :key="index">{{item}}</option>
                    </select>

                    <select>
                        <option v-for="(item,index) in minutes" :value="item" :key="index">{{item}}</option>
                    </select>
                </label>
            </div>

            <div class="item time">
                <label>
                    <div class="name">结束时间</div>
                    <input type="date" :value="nowDates[0]" ref="boxx">
                    <select v-model="firstH">
                        <option v-for="(item,index) in hours" :value="item" :key="index">{{item}}</option>
                    </select>

                    <select v-model="firstM">
                        <option v-for="(item,index) in minutes" :value="item" :key="index">{{item}}</option>
                    </select>
                </label>
            </div>

            <div class="btn">查询</div>
        </div>
    </div>
</template>

<script>
import TagList from '../../components/tagList'
export default {
    name: "recordSearch",
    data(){
        return{
            src:require('../../assets/icons/icon-acc2.png'),
            gameList:[
                {name:'充值记录',on:'icon_record0',off:'icon_record0_b'},
                {name:'提款记录',on:'icon_record1',off:'icon_record1_b'},
                {name:'优惠记录',on:'icon_record2',off:'icon_record2_b'}
            ],
            hours:this.$tool.getArr(24),
            minutes:this.$tool.getArr(60),
            nowDates:this.$tool.nowDate(),
            firstH:23,
            firstM:59,
            searchType:'充值类型'
        }
    },
    components:{
        TagList
    },
    computed:{
        nowDate:()=>{

        }
    },
    methods:{
        showName(name){
            this.searchType = name
        }
    }
}
</script>

<style scoped>

</style>
