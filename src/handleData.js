import axios from 'axios';

function  addUser(name,password) {
    axios.post('http://localhost:3002/api/user/addUser', {
        username: name,
        password: password
    }, {}).then((response) => { console.log(response); })
    }


function addBook (book) {
axios.post('http://localhost:3002/api/book/addBook', {
    bookname: book.name,
    author: book.author,
    typename: book.typename,
    remarks: book.remarks,
    isborrow: book.isborrow
}, {}).then((response) => { console.log(response); })
}

function getuserMsg () {
    axios.get('http://localhost:3002/api/user/query').then((response) => {
        console.log(response.data)
        console.log('--------')
        return response.data
    })
}

function getbookMsg () {
axios.get('http://localhost:3002/api/book/query').then((response) => {
    console.log(response.data)
    console.log('--------')
    return response.data
})
}

export {addUser,addBook,getuserMsg,getbookMsg}

