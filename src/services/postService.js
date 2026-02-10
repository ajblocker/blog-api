import {
  getAll,
  getById,
  create,
  update,
  remove,
} from '../repositories/postRepo.js';

//get all posts from postRepo
export function getAllPosts(options) {
  return getAll(options);
}

//delegates work to repository
export function getPostById(id) {
  const post = getById(id);
  //check if post exist or not
  if (post) {
    //return the post
    return post;
  } else {
    //throw an error to forward to error handler
    const error = new Error(`Post ${id} not found`);
    error.status = 404;
    throw error;
  }
}

//call create function and return result
export function createPost(postData) {
  return create(postData);
}
//call update function and return result
export function updatePost(id, updatedData) {
  const updatedPost = update(id, updatedData);
  //check if post exists or not
  if (updatedPost) {
    return updatedPost;
  } else {
    //throw an error to forward to error handler
    const error = new Error(`Post ${id} not found`);
    error.status = 404;
    throw error;
  }
}

//call remove function and return result
export function deletePost(id) {
  const result = remove(id);
  //check if post exists or not
  if (result) return;
  else {
    //throw an error to forward to error handler
    const error = new Error(`Post ${id} not found`);
    error.status = 404;
    throw error;
  }
}
