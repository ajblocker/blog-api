import { param, body } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';
import { getAllCategories } from '../services/categoryService.js';
//build parameter
export const validateId = [
  //defines input validation chain for id
  param('id')
    .trim()
    .escape()
    .isInt({ min: 1 })
    .withMessage(`Id must be a positive integer`),

  //have errors handled by middleware function
  handleValidationErrors,
];

export const validateUniqueName = [
  body('name')
    //make sure category name exists and check against falsy values
    .exists({ values: 'falsy' })
    //if field doesn't exist == falsy values, give an error message
    .withMessage('Name is required')
    //terminate validation chain
    .bail()
    //if it doesn't fail, sanitize
    .trim()
    .escape()
    //check if its a string
    .isString()
    .withMessage('Name must be a string')
    .bail()
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters long')
    .bail()
    .custom((valueExist) => {
      //grab all categories
      const categories = getAllCategories();
      //loop through categories and convert to lowercase
      //seeing if category equals the value entered
      const exists = categories.some(
        (category) => category.name.toLowerCase() === valueExist.toLowerCase(),
      );
      //if value entered matches, error is thrown
      if (exists) {
        throw new Error(`Category name must be unique`);
      }
      return true;
    }),

  handleValidationErrors,
];
