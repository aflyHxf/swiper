// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import tool from './tool'
import api from './tool/api'
import polyfill from './tool/polyfill'
import ES6Promise from 'es6-promise'
import VueLazyload from 'vue-lazyload'
/***********全局组件************/
import LoadSmall from './components/LoadSmall'
import Crumbs from './components/Crumbs'
import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe'
/************移动端************/
import vueTouch from './tool/vue-touch';

/* eslint-disable*/
Vue.config.productionTip = false;

/**********************************兼容Promise*********************************/
polyfill();
ES6Promise.polyfill();


/**********************************为移动端设置*********************************/
/*     绑定点击效果       */
document.body.addEventListener('touchstart', function () {});

/*  设置REM(100PX=>1REM) */
;(function () {
	var docEl = document.documentElement;
	var resize = 'orientationchange' in window ? 'orientationchange' : 'resize';
	var setRem = function () {
		var screenWidth = docEl.clientWidth || window.screen.width || 360;
		var screenHeight = docEl.clientHeight || window.screen.Height || 360;
		var remWidth = screenWidth<screenHeight ? screenWidth :screenHeight;
		store.commit("SET_STATE",{name:'window',content:{
			height:docEl.clientHeight || window.screen.height || 360,
			width:docEl.clientWidth || window.screen.width || 360
		}});
		docEl.style.fontSize = (100 * screenWidth / 750) + 'px';
	};
	window.addEventListener('resize', setRem, false);
	document.addEventListener('DOMContentLoaded', setRem, false);
	setRem();
})();

/**********************************路由守卫*********************************/

router.beforeEach((to, from, next) => {
    //存放需显示底部导航的路由名
    const test=['home'];
    if(test.includes(to.name)){
    //    alert("路由守卫测试")
    }
    next();
})
/**********************************vue全局插件*********************************/
    // 图片懒加载 https://github.com/hilongjw/vue-lazyload
    Vue.use(VueLazyload, {
        preLoad: 1.3,
        error: 'dist/error.png',
        loading: 'dist/loading.gif',
        attempt: 1
    })
/**********************************全局组件*********************************/


Vue.component('load-small', LoadSmall)
Vue.component('crumbs', Crumbs)
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

/**********************************VUE创建*********************************/
Vue.prototype.$tool = tool
Vue.prototype.$api = api
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
