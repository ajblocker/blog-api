import {
  getAll,
  getById,
  create,
  update,
  remove,
} from '../repositories/categoryRepo.js';

//get all categories from categoryRepo
export function getAllCategories() {
  return getAll();
}

//delegates work to repository
export function getCategoryById(id) {
  const category = getById(id);
  //check if category exists or not
  if (category) {
    //return the category
    return category;
  } else {
    //throw error to forward to error handler
    const error = new Error(`Category ${id} not found`);
    error.status = 404;
    throw error;
  }
}

//call create function and return result
export function createCategory(categoryData) {
  return create(categoryData);
}

//call update function and return results
export function updateCategory(id, updateData) {
  const updatedCategory = update(id, updateData);
  //check if category exist or not
  if (updateCategory) {
    return updatedCategory;
  } else {
    //throw an error to forward to error handler
    const error = new Error(`Category ${id} not found`);
    error.status = 404;
    throw error;
  }
}

//call remove function and return result
export function deleteCategory(id) {
  const result = remove(id);
  //check if category exists or not
  if (result) return;
  else {
    //throw an error to forward to error handler
    const error = new Error(`Category ${id} not found`);
    error.status = 404;
    throw error;
  }
}
