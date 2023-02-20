const Pool = require('../config/db')

const selectRecipe = (data) => {
  let {search,sortby,sort,page,limit} = data
  getQuery = `SELECT recipe.name,recipe.ingredient,recipe.created_at as post_time, users.name as creator, category.name as category FROM recipe JOIN category ON recipe.category_id=category.id JOIN users ON recipe.users_id=users.id WHERE recipe.name ILIKE '%${search}%' AND recipe.deleted_at IS NULL ORDER BY recipe.${sortby} ${sort}`
  if (page && limit) {
    getQuery += ` OFFSET ${(page-1)*limit} LIMIT ${limit}`
  }
  console.log(data)
    return Pool.query(getQuery);
}

const insertRecipe = (data) => {
  console.log(data)
  let {name,ingredient,photo,users_id,category_id} = data
  let time = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
  return Pool.query(
    `INSERT INTO recipe(name,ingredient,photo,created_at,users_id,category_id) VALUES('${name}','${ingredient}','${photo}','${time}','${users_id}','${category_id}')`
  );
}
const selectRecipeById = (data) => {
  console.log(data)
  return Pool.query(
    `SELECT * FROM recipe WHERE id = ${data} AND deleted_at IS NULL`
  );
}

const deleteRecipeById = (data) => {
  console.log(data)
  let time = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
  return Pool.query(
    `UPDATE recipe SET deleted_at = '${time}' WHERE id = ${data};`
  );
}

const updateRecipe = (id,data) => {
  console.log(id,data)
  let {name,ingredient,photo,users_id,category_id} = data
  return Pool.query(
    `UPDATE recipe SET name = '${name}', ingredient = '${ingredient}', photo = '${photo}', users_id = ${users_id}, category_id = ${category_id} WHERE id = ${id};`
  );
}

module.exports = {selectRecipe,insertRecipe,selectRecipeById,deleteRecipeById,updateRecipe}