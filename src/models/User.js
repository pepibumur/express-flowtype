/** @flow */
import DataType from 'sequelize';
import Model from '../sequelize';

const User = Model.define('User', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  username: {
    type: DataType.STRING(200),
  },
  email: {
    type: DataType.STRING(200),
    validate: { isEmail: true },
  },

}, {

  indexes: [
    { fields: ['email'] },
  ],

});

export default User;
