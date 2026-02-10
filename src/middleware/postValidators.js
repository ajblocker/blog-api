//store middleware for input post resources
//input for post request

//define validation chain for parameter
//build validation chain to validate fields/route parameters
import { param, body, oneOf, query } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';
//build parameter
export const validateId = [
  //defines input validation chain for id
  param('id')
    //trim whitespace
    .trim()
    .escape()
    //make sure its a positive integer
    .isInt({ min: 1 })
    //if fails, attach error message
    .withMessage(`Id must be a positive integer`),

  //have errors handle by middleware function
  handleValidationErrors,
];

//
export const validateCreatePost = [
  //create body chain
  //validate & sanitize title
  body('title')
    //make sure post exits and check against falsy values
    .exists({ values: 'falsy' })
    //if field doesn't exists == falsy values, give an error message
    .withMessage('Title is required')
    //terminate validation chain
    .bail()
    //if it doesn't fail sanitize
    .trim()
    .escape()
    .isString()
    //if its not a string, print out error message
    .withMessage('Title must be a string')
    .bail()
    //make sure title has at least 3 characters
    .isLength({ min: 3 })
    .withMessage('Title must be at least 3 characters'),

  //validate and sanitize content
  body('content')
    //make sure post exits and check against falsy values
    .exists({ values: 'falsy' })
    //if field doesn't exists == falsy values, give an error message
    .withMessage('Content is required')
    //terminate validation chain
    .bail()
    //if it doesn't fail sanitize
    .trim()
    .escape()
    .isString()
    //if its not a string, print out error message
    .withMessage('Content must be a string')
    .bail()
    //make sure title has at least 3 characters
    .isLength({ min: 10 })
    .withMessage('Content must be at least 10 characters'),

  //have errors handle by middleware function
  handleValidationErrors,
];

export const validateUpdatePost = [
  //create middleware to ensure one chain is valid
  oneOf(
    [
      //one of the two fields must be true in req body
      body('title').exists({ values: 'falsy' }),
      body('content').exists({ values: 'falsy' }),
    ],
    { message: 'At least one field (title, content must be provided' },
  ),

  //validation chain for title being optional
  body('title')
    .optional()
    .trim()
    .escape()
    .isString()
    //if its not a string, print out error message
    .withMessage('Title must be a string')
    .bail()
    //make sure title has at least 3 characters
    .isLength({ min: 10 })
    .withMessage('Title must be at least 3 characters'),

  //validation chain for content being optional
  body('content')
    .optional()
    .trim()
    .escape()
    .isString()
    //if its not a string, print out error message
    .withMessage('Content must be a string')
    .bail()
    //make sure title has at least 3 characters
    .isLength({ min: 10 })
    .withMessage('Content must be at least 10 characters'),

  handleValidationErrors,
];

//chain query parameters
export const validatePostQuery = [
  //validation for sortby
  query('sortBy')
    .optional()
    //if provided
    //match value in array
    .isIn(['id', 'title', 'content', 'createdAt'])
    .withMessage('sortBy must be one of id, title, content, createdAt'),

  //validation for order
  query('order')
    .optional()
    .isIn(['asc', 'desc'])
    .withMessage('order must be either asc or desc'),

  //validation for offset
  query('offset')
    .optional()
    .isInt({ min: 0 })
    .withMessage('offset must be a non-negative integer'),

  //validation for limit
  query('limit')
    .optional()
    .isInt({ min: 0, max: 50 })
    .withMessage('limit must be an integer between 1 and 50'),

  handleValidationErrors,
];
