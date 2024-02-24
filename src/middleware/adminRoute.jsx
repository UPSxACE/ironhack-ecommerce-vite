import axios from "axios";

export default async function adminRoute() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return Response.redirect("/", 302);
  }

  const config = token
    ? {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    : null;

  let response;
  let error;

  await axios
    .get(
      "http://localhost:3000/users/" + import.meta.env.VITE_STORE_OWNER_ID,
      config
    )
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      error = err;
    });

  if (error) {
    return Response.redirect("/", 302);
  }

  return response?.data;
}
