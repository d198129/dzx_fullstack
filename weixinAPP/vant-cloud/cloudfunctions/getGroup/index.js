// 云函数入口文件
const cloud = require('wx-server-sdk')

const env = 'dddd-8gf6tlhw1bb9e8cc'
cloud.init()
const db = cloud.database({ env }) //指明云函数生效的环境

// 云函数入口函数
exports.main = async(event, context) => {
    const openId = cloud.getWXContext().OPENID
        //查找user-group这个库里面是否具有该openId
        //按照这个openID把user-group里对应的数据取出
        //去group这个库里查找所有的_id和groupRd相同的数据
}