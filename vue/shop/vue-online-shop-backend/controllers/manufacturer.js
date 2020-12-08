// 模块化控制器
const Model = require('../model');
const { Manufacturer } = Model;
const manufacturerController = {
  create(req, res) {
    //request response
    //逻辑
    // Model
    // View
    const requestBody = req.body;//
    //mongoose Model new save
    const newManufacturer = new Manufacturer(requestBody);
    newManufacturer.save((err,saved)=>{
      if (err) {
        console.log(err);
        return;
      }
      Manufacturer
        .findOne({ _id: newManufacturer._id })
        .exec((err, manufacturer) => res.json(manufacturer));
    })
  },
  all(req, res) {
    Manufacturer
      .find({})
      .exec((err,manufacturer) => res.json(manufacturer))
  },
  byId(req, res) {
    const idParams = req.params.id;
    Manufacturer
      .findOne({ _id: idParams })
      .exec((err, manufacturer) => res.json(manufacturer));
  },
  remove(req, res) {
    // url 删除
    const idParams = req.params.id;
    Manufacturer
      .findOne({ _id: idParams })
      .remove((err, removed) => res.json(idParams));
  },
  update(req, res) {
    const idParams = req.params.id;
    let manufacturer = req.body;
    Manufacturer.updateOne({
      _id:idParams
    }, {
      ...manufacturer
    }, (err, updated) => {
        res.json(updated)
    })
  }
}
module.exports = manufacturerController;