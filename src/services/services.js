export const fetchImages = async ({ limit, page }) => {
  return await fetch(
    `https://api.unsplash.com/photos/?limit=${limit}&page=${page}&client_id=Y2DCdUt4uXfZWb54_QeW2nIpK_x8ZGOCf6iEUk0qvWI`
  ).then((response) => {
    if (response.status !== 200) {
      throw Error;
    }
    return response.json();
  });
};

export const fetchImage = async (id) => {
  return await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=Y2DCdUt4uXfZWb54_QeW2nIpK_x8ZGOCf6iEUk0qvWI`
  ).then((response) => {
    console.log("response", response);
    if (response.status !== 200) {
      throw Error;
    }
    return response.json();
  });
};
