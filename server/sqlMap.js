// sql语句
//sqlMap.js——SQL 语句映射文件，供 API 调用
var sqlMap = {
    user: {
        add: 'insert into user(username,password) values (?,?)',
        del: 'delete from user where id=(?)'
    },
    book: {
        add: 'insert into book(bookname,author,typename,remarks,isborrow) values (?,?,?,?,?)',
        del: 'delete from book where id=(?)',
        bor: 'update book set isborrow=(?) where id=(?);'
    },
    stu: {
        add: 'insert into stu(stu_name,stu_num,book_id,start_time,end_time,bookname) values (?,?,?,?,?,?)',
        del: 'delete from stu where stu_id=(?)'
    }
}
export default sqlMap


