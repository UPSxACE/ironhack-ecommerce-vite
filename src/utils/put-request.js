import axios from "axios";

export default async function putRequest(route, body) {
  let result;
  let error;

  // remove '/' if the route string starts with it
  const routeFixed = route.startsWith("/") ? route.slice(1) : route;

  await axios
    .put("http://localhost:3000/" + routeFixed, body, {
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
