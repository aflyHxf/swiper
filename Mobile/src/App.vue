<template>
    <div id="app">
        <keep-alive>
            <router-view @click.native.stop="cfClose" />
        </keep-alive>
        <transition name="fade" mode="out-in" appear>
            <loading v-if="loading"></loading>
        </transition>
        <alert></alert>
        <confirm></confirm>
    </div>
</template>

<script>
import 'flex.css'
import Loading from '@/components/Loading.vue'
import Alert from '@/components/Alert.vue'
import Confirm from '@/components/Confirm.vue'
import {mapState} from 'vuex'
export default {
    name: 'App',
    data () {
        return {
            headrShow:true
        };
    },
    components:{
        Loading,Alert,Confirm
    },
    mounted(){
        this.$api.getPlatformDetails().then(res=>{
            this.$tool.SET_STATE({name:"platform",content:res.data})
        })
        this.headrShow=this.$route.path.split("/").length<3;
    },
    methods:{
        cfClose(e){
            this.$tool.SET_STATE({name:'cf',content:false});
        }
    },
    computed:{
        ...mapState(['loading','cf'])
    },
    watch:{
        $route(){
            this.headrShow=this.$route.path.split("/").length<3;
        }
    }
}
</script>

<style  lang="scss">
@import "vue-swipe/dist/vue-swipe.css";
//外部公共样式
@import "scss/base.scss";
@import "scss/kingbally.scss";
    #app {
        font-family: "Microsoft Yahei","Arial Narrow",sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #141414;
        font-size: 0.28rem;
        line-height: 1.5;
        width: 100%;
        height: 100%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
