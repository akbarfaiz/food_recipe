const Pool = require('../config/db')

const selectUsers = () => {
    return Pool.query(
      `SELECT * FROM users WHERE deleted_at IS NULL`
    );
  };

const insertUsers = data => {
  console.log(data)
  return Pool.query(
    `INSERT INTO users(name) VALUES('${data}')`
  );
}
const selectUsersById = (data) => {
  console.log(data)
  return Pool.query(
    `SELECT * FROM users WHERE id = ${data}`
  );
}
const selectUsersByName = (data) => {
  console.log(data)
  return Pool.query(
    `SELECT * FROM users WHERE name ='${data}'`
  );
}

const deleteUsersById = (data) => {
  console.log(data)
  let time = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
  return Pool.query(
    `UPDATE users SET deleted_at = '${time}' WHERE id = ${data};`
  );
}

const updateUsers = (id,name) => {
  console.log(id,name)
  return Pool.query(
    `UPDATE users SET name = '${name}' WHERE id = ${id};`
  );
}

module.exports = {selectUsers,insertUsers,selectUsersById,selectUsersByName,deleteUsersById,updateUsers}