import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../services/categoryService.js';

//call categoryService function
export function getAllCategoriesHandler(req, res) {
  let categories = getAllCategories();
  res.status(200).json(categories);
}

//handle HTTP logic requests
export function getCategoryByIdHandler(req, res) {
  //extract id from route
  const id = parseInt(req.params.id);
  //call the service
  const category = getCategoryById(id);
  //return the category response
  return res.status(200).json(category);
}

export function createCategoryHandler(req, res) {
  //retrieve data from request
  const { name } = req.body;
  //call the service and get the result
  const newCategory = createCategory({ name });
  //send new category response
  res.status(201).json(newCategory);
}

export function updateCategoryHandler(req, res) {
  //extract id from request
  const id = parseInt(req.params.id);
  //retrieve data from request body
  const { name } = req.body;
  //call the service
  const updatedCategory = updateCategory(id, { name });
  //return the post
  return res.status(200).json(updatedCategory);
}

export function deleteCategoryHandler(req, res) {
  //extract id from route
  const id = parseInt(req.params.id);
  //call the service
  deleteCategory(id);
  //return the post
  return res.status(204).send();
}
