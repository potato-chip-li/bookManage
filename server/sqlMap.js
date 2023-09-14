// sql语句
//sqlMap.js——SQL 语句映射文件，供 API 调用
var sqlMap = {
    user: {
        add: 'insert into user(username,password) values (?,?)',
    },
    book: {
        add: 'insert into book(bookname,author,typename,remarks,isborrow) values (?,?,?,?,?)',
    }
}
export default sqlMap


