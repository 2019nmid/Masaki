const moogoose = require('mongoose');
const Schema = moogoose.Schema;

//实例化数据模板
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User= moogoose.model('users', UserSchema);

module.exports = User;