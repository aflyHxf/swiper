import Vue from 'vue'
import Router from 'vue-router'


//首页
const Home = () => import('pages/home/Home')
//优惠活动
const Activity = () => import('pages/activity/Activity')

const Register = r => require.ensure([], () => r(require('@/pages/home/Register')), 'register')
const Account = r => require.ensure([], () => r(require('@/pages/account/Account')), 'home')
const Lobby = r => require.ensure([], () => r(require('@/pages/lobby/Lobby')), 'home')
const Recharge = r => require.ensure([], () => r(require('@/pages/recharge/Recharge')), 'home')
const Withdraw = r => require.ensure([], () => r(require('@/pages/withdraw/Withdraw')), 'home')
// 官网最新写法 同上
const Login = () => import('@/pages/home/Login')
const OnlineRecharge = () => import('@/pages/recharge/onlineRecharge')
const SubmitDeposit = () => import('@/pages/recharge/submitDeposit')
const CardRecharge = () => import('@/pages/recharge/cardRecharge')

const AccountInfo = () => import('@/pages/account/AccountInfo')
const UpdatePhoneNo = () => import('@/pages/account/UpdatePhoneNo')
const GameTransfer = () => import('@/pages/account/GameTransfer')
const RecordSearch = () => import('@/pages/account/RecordSearch')
const ModifyPassword = () => import('@/pages/account/ModifyPassword')
const SMSNotice = () => import('@/pages/account/SMSNotice')
const WashCodePreferential = () => import('@/pages/account/WashCodePreferential')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/activity',
            component: Activity
        },

        {
            path: '/home/register',
            component: Register
        },
        {
            path: '/home/login',
            component: Login
        },
        {
            path: '/account',
            component: Account
        },
        {
            path: '/account/accountInfo',
            name: 'accountInfo',
            component: AccountInfo
        },
        {
            path: '/account/accountInfo/updatePhoneNo',
            name: 'updatePhoneNo',
            component: UpdatePhoneNo
        },
        {
            path: '/account/gameTransfer',
            name: 'gameTransfer',
            component: GameTransfer
        },
        {
            path: '/account/recordSearch',
            name: 'recordSearch',
            component: RecordSearch
        },
        {
            path: '/account/modifyPassword',
            name: 'modifyPassword',
            component: ModifyPassword
        },
        {
            path: '/account/SMSNotice',
            name: 'SMSNotice',
            component: SMSNotice
        },
        {
            path: '/account/WashCodePreferential',
            name: 'washCodePreferential',
            component: WashCodePreferential
        },
        {
            path: '/lobby',
            name: 'lobby',
            component: Lobby
        },
        {
            path: '/recharge',
            name: 'recharge',
            component: Recharge
        },
        {
            path: '/recharge/onlineRecharge',
            name: 'onlineRecharge',
            component: OnlineRecharge
        },
        {
            path: '/recharge/submitDeposit',
            name: 'submitDeposit',
            component: SubmitDeposit
        },
        {
            path: '/recharge/cardRecharge',
            name: 'cardRecharge',
            component: CardRecharge
        },
        {
            path: '/withdraw',
            name: 'withdraw',
            component: Withdraw
        },
    ]
})
