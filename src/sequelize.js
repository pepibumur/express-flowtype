/** @flow */
import Sequelize from 'sequelize';

const databaseUrl = 'sqlite:database.sqlite';

const sequelize = new Sequelize(databaseUrl, {
  define: {
    freezeTableName: true,
  },
});

export default sequelize;
