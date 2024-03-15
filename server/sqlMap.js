// sql语句
//sqlMap.js——SQL 语句映射文件，供 API 调用
var sqlMap = {
    user: {
        sel: 'select * from user',
        add: 'insert into user(username,password) values (?,?)',
        del: 'delete from user where id=(?)'
    },
    book: {
        sel:'select * from book',
        sel_unbor: 'select * from book where id not in (select book_id from book_manage.stu where `isborrow` = 1)',
        add: 'insert into book(bookname,author,typename,remarks) values (?,?,?,?)',
        del: 'delete from book where id=(?)',
    },
    stu: {
        sel: 'select stu.*,book.bookname from stu left join book on stu.book_id=book.id',
        sel_track: 'select stu.book_id,stu.stu_num,stu.stu_name,stu.start_time,stu.rel_end_time,book.bookname from stu right join book on stu.book_id=book.id',
        add: 'insert into stu(book_id,stu_num,stu_name,pre_end_time,isborrow) values (?,?,?,?,?)',
        mod: 'update stu set isborrow=(?) where id=(?)'
    }
}
export default sqlMap


