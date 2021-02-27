const mysql = require('mysql');
const config = require('./defaultConfig');

// 链接线程池

let pool = mysql.createPool({
  host: config.dataBase.HOST,
  user: config.dataBase.USERNAME,
  password: config.dataBase.PASSWORD,
  database: config.dataBase.DATABASE,
  port: config.dataBase.PORT
})

let allServices = {
  query: function (sql, value) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err);
        } else {
          connection.query(sql, value, (err, rows) => {
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

// 用户登录

let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}"`
  return allServices.query(_sql);
}

// 查找用户
let findUser = function (usertel) {
  let _sql = `select * from users where usertel="${usertel}"`;
  return allServices.query(_sql);
}


// 用户注册
let insertUser = function (value) {
  let _sql = `insert into users set username=?,userpwd=?,usertel=?,useravatar=?`;
  return allServices.query(_sql, value);
}

module.exports = {
  userLogin,
  findUser,
  insertUser
}