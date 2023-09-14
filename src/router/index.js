import Books from '../pages/Books.vue'
import mainPage from '../pages/mainPage.vue'
import borrowedBooks from '../pages/Borrow/borrowedBooks.vue'
import unreturnedBooks from '../pages/Borrow/unreturnedBooks.vue'
import borrowedHistory from '../pages/Borrow/borrowHistory.vue'
import Borrower from '../pages/Borrower.vue'
import Account from '../pages/Account.vue'

import Test from '../components/Test.vue'

import { createRouter, createWebHashHistory } from 'vue-router'



export default new createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/mainPage',
            name:mainPage,
            component:mainPage
        },
        {
            path:'/Books',
            name:Books,
            component:Books
        },
        {
            path:'/borrowedBooks',
            name:borrowedBooks,
            component:borrowedBooks
        },
        {
            path:'/unreturnedBooks',
            name:unreturnedBooks,
            component:unreturnedBooks
        },
        {
            path:'/borrowedHistory',
            name:borrowedHistory,
            component:borrowedHistory
        },
        {
            path:'/Borrower',
            name:Borrower,
            component:Borrower
        },
        {
            path:'/Account',
            name:Account,
            component:Account
        },
        {
            path:'/Test',
            name:Test,
            component:Test
        }
    ]
})