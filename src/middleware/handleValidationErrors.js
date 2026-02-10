//handle validation request for all resources
import { validationResult } from 'express-validator';

//define middleware function
export function handleValidationErrors(req, res, next) {
  //retrieve validation result
  const errors = validationResult(req);
  //check if not empty
  if (!errors.isEmpty()) {
    //generate a 400 response with an array of error messages
    return res
      .status(400)
      .json({ errors: errors.array().map((err) => err.msg) });
  }
  //if it is empty, call next middleware in route (controller)
  next();
}
