import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../services/postService.js';

//call postService function
export function getAllPostsHandler(req, res) {
  //get fields from query in ascending order, limited to 5 posts
  const {
    title = '',
    sortBy = 'id',
    order = 'asc',
    offset = 0,
    limit = 5,
  } = req.query;

  //pass to repository through service layer
  const options = {
    title,
    sortBy,
    order,
    offset: parseInt(offset),
    limit: parseInt(limit),
  };

  //get the result of all posts
  let posts = getAllPosts(options);
  res.status(200).json(posts);
}

//handles HTTP logic
export function getPostByIdHandler(req, res) {
  //extract id from route
  const id = parseInt(req.params.id);
  //call the service
  const post = getPostById(id);
  //return the post
  return res.status(200).json(post);
}

export function createPostHandler(req, res) {
  //retrieve data from request
  const { title, content } = req.body;
  //call the service and get the result
  const newPost = createPost({ title, content });
  //send new post response
  res.status(201).json(newPost);
}

export function updatePostHandler(req, res) {
  //extract id from request
  const id = parseInt(req.params.id);
  //retrieve data from request body
  const { title, content } = req.body;
  //call service
  const updatedPost = updatePost(id, { title, content });
  //return the post
  return res.status(200).json(updatedPost);
}

//handles HTTP logic
export function deletePostHandler(req, res) {
  //extract id from route
  const id = parseInt(req.params.id);
  //call the service
  deletePost(id);
  //return the post
  return res.status(204).send();
}
