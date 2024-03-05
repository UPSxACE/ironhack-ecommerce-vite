import axios from "axios";

export default async function getRequest(route) {
  let result;
  let error;

  // remove '/' if the route string starts with it
  const routeFixed = route.startsWith("/") ? route.slice(1) : route;

  await axios
    .get(import.meta.env.VITE_API_URL + "/" + routeFixed, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      error = err;
    });

  return { result, error };
}
