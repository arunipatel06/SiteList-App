const allSiteLists = async () => {
  return fetch("https://tracktik-challenge.staffr.com/sites", {
    method: "GET",
  })
    .then((response) => response.json())
    .catch(console.error);
};

export default allSiteLists;
