export const fetchImages = async () => {
  return fetch("https://jsonplaceholder.typicode.com/photos").then((response) =>
    response.json()
  );
};
