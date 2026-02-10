//store categories
export const categories = [
  {
    id: 1,
    name: 'Coding',
  },
  {
    id: 2,
    name: 'Tips',
  },
  {
    id: 3,
    name: 'Tutorial',
  },
];

let nextId = categories.length;

//returns the next available Id for each category
export function getNextId() {
  nextId++;
  return nextId;
}

//clears the categories array and resets counter
export function resetDb() {
  categories.length = 0;
  nextId = categories.length;
}
