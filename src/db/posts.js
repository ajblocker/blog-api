//store blog posts
export const posts = [
  {
    id: 1,
    title: 'My First Blog',
    content: 'This is my first blog',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Learning NodeJS',
    content: 'NodeJS is a powerful backend runtime',
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Express Tutorial',
    content: 'Express makes building APIs easy and fast',
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: 'REST API Best Practices',
    content: 'Learn how to structure REST APIs efficiently',
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    title: 'JavaScript Tips',
    content: 'Some handy JavaScript tricks for everyday coding',
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    title: 'Async/Await Deep Dive',
    content: 'Understanding asynchronous programming in JS',
    createdAt: new Date().toISOString(),
  },
  {
    id: 7,
    title: 'Testing with Postman',
    content: 'Postman helps you test your API endpoints easily',
    createdAt: new Date().toISOString(),
  },
  {
    id: 8,
    title: 'Handling Errors in Express',
    content: 'Learn to use centralized error handlers effectively',
    createdAt: new Date().toISOString(),
  },
  {
    id: 9,
    title: 'Filtering and Sorting',
    content: 'Techniques for filtering and sorting API responses',
    createdAt: new Date().toISOString(),
  },
  {
    id: 10,
    title: 'Pagination Tips',
    content: 'Implementing efficient pagination in your APIs',
    createdAt: new Date().toISOString(),
  },
];
let nextId = posts.length;

//return new unique id post for each post
export function getNextId() {
  nextId++;
  return nextId;
}

//clears the posts array and reset counter
export function resetDb() {
  posts.length = 0;
  nextId = posts.length;
}
