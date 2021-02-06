const fetchSiteList = async () => {
  const response = await fetch("https://tracktik-challenge.staffr.com/sites", {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export default fetchSiteList;
