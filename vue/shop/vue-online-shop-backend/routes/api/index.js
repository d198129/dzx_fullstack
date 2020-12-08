const { Manufacturer } = require("../../model")

//迎接接口请求
// Manufacturer
// MVC api 向外暴露
//一切皆资源
// 数据的增删改查
// 1.设计一个URL RESTFUL
// /api/v1/manufacturer GET [{name:'小米'}]
// /api/v1/manufacturer POST body{}
const express = require('express');
const router = express.Router();
const manufacturer = require('../../controllers/manufacturer')
//定义url访问的路口
router.post('/manufacturers',manufacturer.create);
router.get('/manufacturers',manufacturer.all);
router.get('/manufacturers/:id',manufacturer.byId);
router.delete('/manufacturers/:id',manufacturer.remove);
router.put('/manufacturers/:id',manufacturer.update);
module.exports = router;