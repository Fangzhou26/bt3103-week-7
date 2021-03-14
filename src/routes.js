import PageContent from './components/PageContent.vue'
import Orders from './components/Orders.vue'
import Modify from './components/Modify.vue'
import Dashboard from './components/Dashboard.vue'
import CallAPI from "./components/CallAPI.vue"
export default[
    { path: '/', name: 'Home', component: PageContent},
    { path: '/orders', name: 'Orders',component: Orders},
    { path: '/modify', name:'Modify',component: Modify, props:true},
    { path: '/dashboard', component: Dashboard},
    { path: '/callAPI', component: CallAPI}
]