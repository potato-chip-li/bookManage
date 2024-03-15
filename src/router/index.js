import Books from '../pages/Books.vue'
import mainPage from '../pages/mainPage.vue'
import borrowedBooks from '../pages/borrowedBooks.vue'
import unreturnedBooks from '../pages/unreturnedBooks.vue'
import Account from '../pages/Account.vue'
import bookTrack from '../pages/bookTrack.vue'


import { createRouter, createWebHashHistory, } from 'vue-router'



const router = new createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:mainPage,
            component:mainPage,
            meta:{title:'主页'}
        },
        {
            path:'/Books',
            name:Books,
            component:Books,
            meta:{title:'书籍管理'}
        },
        {
            path:'/borrowedBooks',
            name:borrowedBooks,
            component:borrowedBooks,
            meta:{title:'未还书籍'}
        },
        {
            path:'/unreturnedBooks',
            name:unreturnedBooks,
            component:unreturnedBooks,
            meta:{title:'逾期书籍'}
        },
        {
            path:'/Account',
            name:Account,
            component:Account,
            meta:{title:'账户管理'}
        },
        {
            path:'/bookTrack',
            name:bookTrack,
            component:bookTrack,
            meta:{title:'借阅记录'}
        },
    ]
})

  
  // 全局后置路由守卫，初始化时调用，在每次切换路由时调用
  router.afterEach((to,from)=>{
      // 设置title
      document.title=to.meta.title
  })
  
  export default router