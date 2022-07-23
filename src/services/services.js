export const fetchImages = async (limit, page) => {
  console.log("REQUESR");
  return await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`
  ).then((response) => response.json());
};
