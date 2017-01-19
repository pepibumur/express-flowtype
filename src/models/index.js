/** @flow */
import sequelize from '../sequelize';
import User from './User';

function sync(...args : Array<Object>) : Promise<void> {
  return sequelize.sync(...args);
}

export default { sync };
export { User };
