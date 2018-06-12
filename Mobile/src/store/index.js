import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
// import {platformId} from "@/config/env";
Vue.use(Vuex);
const state={
    loading:false,    //加载动画
    alert:[],
    confirm:[],
    player:null,   //玩家信息
    platform:{},  //平台信息
    cf:false     //是否展开客服
};

export default new Vuex.Store({state,getters,actions,mutations,});

