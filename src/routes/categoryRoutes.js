import express from 'express';
import {
  getAllCategoriesHandler,
  getCategoryByIdHandler,
  createCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
} from '../controllers/categoryController.js';
//validate route parameters
import {
  validateId,
  validateUniqueName,
} from '../middleware/categoryValidators.js';

//create router
const router = express.Router();
//add routes and call controller handler
router.get('/', validateUniqueName, getAllCategoriesHandler);
router.get('/:id', validateId, getCategoryByIdHandler);
router.post('/', createCategoryHandler);
router.put('/:id', validateId, updateCategoryHandler);
router.delete('/:id', validateId, deleteCategoryHandler);
//export router to connect to main server
export default router;
