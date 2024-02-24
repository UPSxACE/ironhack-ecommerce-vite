import axios from "axios";

export default async function postRequest(route, body) {
  let result;
  let error;

  // remove '/' if the route string starts with it
  const routeFixed = route.startsWith("/") ? route.slice(1) : route;

  await axios
    .post("http://localhost:3000/" + routeFixed, body)
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      error = err;
    });

  return { result, error };
}
