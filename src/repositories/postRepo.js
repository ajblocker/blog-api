//import posts
import { posts, getNextId } from '../db/posts.js';

//call the repository function
export function getAll({ title, sortBy, order, offset, limit }) {
  //make a shallow copy of post array
  let results = [...posts];
  //filtering if title is not empty
  if (title) {
    //filter the post with title insensitive string
    results = results.filter((post) =>
      post.title.toLowerCase().includes(title.toLowerCase()),
    );
  }

  //sorting
  results.sort((a, b) => {
    //check if a > b, return value
    if (a[sortBy] < b[sortBy]) return order === 'asc' ? -1 : 1;
    //return positive value
    if (a[sortBy] > b[sortBy]) return order === 'asc' ? 1 : -1;
    return 0;
  });

  //pagination
  //define the index from beginning to end
  const endIndex = offset + limit;
  results = results.slice(offset, endIndex);

  //return the result of all the posts
  return results;
}

//retrieve the post matching the ID from database
export function getById(id) {
  let post = posts.find((post) => post.id === id);
  return post;
}

//store the post in database and generate new id
export function create(postData) {
  //create a new post object
  const newPost = {
    //get id from database
    id: getNextId(),
    title: postData.title,
    content: postData.content,
    createdAt: new Date().toISOString(),
  };

  //add to array
  posts.push(newPost);
  //return post
  return newPost;
}

//update post in database
export function update(id, updatedData) {
  //find post by id
  const post = posts.find((post) => post.id === id);
  //if post doesn't exist, return undefined
  if (!post) return undefined;
  //only update fields that exists (content and title)
  if (updatedData.title) post.title = updatedData.title;
  if (updatedData.content) post.content = updatedData.content;
  //return the post
  return post;
}

//remove post by id
export function remove(id) {
  //remove post by id that matches
  const index = posts.findIndex((post) => post.id === id);
  //can't find post, return -1 (cant find post)
  if (index == -1) return false;
  //remove post if found
  posts.splice(index, 1);
  return true;
}
