const mysql = require('mysql');
const config = require('./defaultConfig');

//连接线程池
let pool = mysql.createPool({
  host: config.dataBase.HOST,
  user: config.dataBase.USERNAME,
  password: config.dataBase.PASSWORD,
  database: config.dataBase.DATABASE,
  port: config.dataBase.PORT
})

let allServices = {
  query: function (sql,values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err,connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err,rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

//用户登录
// 查询用户表里有没有用户名和密码
let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}"`
  return allServices.query(_sql)
}

//查找用户
let findUser = function (username) {
  let _sql = `select * from users where username="${username}";`
  return allServices.query(_sql);
}

//获取文章列表
let findNoteListByType = function (title) {
  let _sql = `select * from note where note_type="${title}";`
  return allServices.query(_sql);
}

//注册用户
let insertUser = function (value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
  return allServices.query(_sql,value)
}

module.exports = {
  userLogin,
  findUser,
  insertUser,
  findNoteListByType
}