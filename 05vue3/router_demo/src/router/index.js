import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// 分包处理 懒加载
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
// 创建路由：映射关系
const router = createRouter({
    // 指定采用的模式
    history: createWebHashHistory(), // 哈希模式,
    // history: createWebHistory(),
    // 映射关系
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',  // name必须是唯一的
            component: Home,
            meta: {
                name: '',
                age: ''
            },
            children: [
                {
                    path: '/home',
                    redirect: '/home/recommend'
                },
                {
                    path: 'recommend', // 相当于 /home/recommend
                    component: () => import('../views/HomeRecommend.vue')
                },
                {
                    path: 'rank',
                    component: () => import('../views/HomeRank.vue')
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/user/:id', // 动态路由
            component: () => import('../views/User.vue')
        },
        {
            path: '/order',
            component: () => import('../views/Order.vue')
        },
        {
            path: '/login',
            component: () => import('../views/Login.vue')
        },
        // 匹配不到对应的路由组件，显示找不到
        {
            path: '/:pathMatch(.*)', // /:pathMatch(.*) 和/:pathMatch(.*)* 的区别，后者会对路径做一个解析，解析为数组比如abc/cba/nba,会解析为['abc','cba','nba']
            component: () => import('../views/NotFound.vue')
        }
    ],


})

// let isAdmin = true
let isAdmin = false
// 动态添加路由
if (isAdmin) {
    // 一级路由
    router.addRoute({
        path: '/admin',
        component: () => import('../views/Admin.vue')
    })

    // 二级路由
    // 第一个参数是父级路由的名字
    router.addRoute('home', {
        path: 'vip',
        component: () => import('../views/homeVip.vue')

    })
}

// 路由导航守卫
// 进行任何的路由跳转之前，传入到beforeEach中的函数都会被回调
// 需求：进入到订单页面，判断用户是否登录
// 情况一：用户没有登录，那么跳转到登录页面，进行登录操作
// 情况二：用户登录成功，直接进入订单页面
router.beforeEach((to) => {
    // console.log('beforeEach 传入的函数被回调')
    // console.log(to)
    // if (to.path !== '/login') {
    //     return '/login'
    // }

    const token = localStorage.getItem('token')
    if (!token && to.path === '/order') {
        return '/login'
    }



})

export default router

// router是整个路由对象
// route是每个映射关系