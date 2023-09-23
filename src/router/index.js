import Books from '../pages/Books.vue'
import mainPage from '../pages/mainPage.vue'
import borrowedBooks from '../pages/Borrow/borrowedBooks.vue'
import unreturnedBooks from '../pages/Borrow/unreturnedBooks.vue'
import Account from '../pages/Account.vue'


import { createRouter, createWebHashHistory, } from 'vue-router'



const router = new createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:mainPage,
            component:mainPage,
            meta:{isAuth:false,title:'主页'}
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
            meta:{title:'书籍管理'}
        },
        {
            path:'/unreturnedBooks',
            name:unreturnedBooks,
            component:unreturnedBooks,
            meta:{title:'书籍管理'}
        },
        {
            path:'/Account',
            name:Account,
            component:Account,
            meta:{title:'书籍管理'}
        },
    ]
})

  
  // 全局后置路由守卫，初始化时调用，在每次切换路由时调用
  router.afterEach((to,from)=>{
      // 设置title
      document.title=to.meta.title
  })
  
  export default router