//import categories
import { categories, getNextId } from '../db/categories.js';

export function getAll() {
  return categories;
}

//retrieve the categories matching the id from database
export function getById(id) {
  let category = categories.find((category) => category.id === id);
  return category;
}

//store the categories in database and generate new id
export function create(categoryData) {
  //create new category object
  const newCategory = {
    //get id from database
    id: getNextId(),
    name: categoryData.name,
  };

  //add to array
  categories.push(newCategory);
  return newCategory;
}

//update category in database
export function update(id, updateData) {
  //find post by category
  const category = categories.find((category) => category.id === id);
  //if category is not found, return undefined
  if (!category) return undefined;
  //only update fields that exists
  if (updateData.name) category.name = updateData.name;
  //return the category
  return category;
}

//update categories in database
export function remove(id) {
  const index = categories.findIndex((category) => category.id === id);
  //can't find category, return -1
  if (index == -1) return false;
  //remove category if found
  categories.splice(index, 1);
  return true;
}
