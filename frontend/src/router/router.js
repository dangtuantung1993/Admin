import Login from '@/components/Login'
import Home from '@/components/Home'
import Register from '@/components/Register'
import VueRouter from 'vue-router'
const routes = [
    { path:'/Login', component: Login },
    { path: '/', component: Home },
    { path: '/Register', component: Register}
]
export default new VueRouter({routes,mode:'history'})