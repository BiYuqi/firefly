const Group = require('../models/group')
const User = require('../models/user')

const getMyGroup = async (req, res) => {
  const { id } = req.query
  let user = await User.findOne({ _id: id })
  if (user) {
    let group = await Group.find({members: user})
    return res.send({
      data: group || [],
      code: 200,
      msg: 'success'
    })
  } else {
    return res.status(404).send({
      msg: '找不到该用户下的分组',
      code: 404
    })
  }
}

module.exports = {
  getMyGroup
}
