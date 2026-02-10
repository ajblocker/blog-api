import express from 'express';
import {
  getAllPostsHandler,
  getPostByIdHandler,
  createPostHandler,
  updatePostHandler,
  deletePostHandler,
} from '../controllers/postController.js';
//validate route parameters
import {
  validateId,
  validateCreatePost,
  validateUpdatePost,
  validatePostQuery,
} from '../middleware/postValidators.js';

//create router
const router = express.Router();
//add routes
//call controller handler
router.get('/', validatePostQuery, getAllPostsHandler);
router.get('/:id', validateId, getPostByIdHandler);
router.post('/', validateCreatePost, createPostHandler);
router.put('/:id', validateId, validateUpdatePost, updatePostHandler);
router.delete('/:id', validateId, deletePostHandler);
//export router to connect ot main server
export default router;
