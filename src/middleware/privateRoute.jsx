export default async function guestRoute() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return Response.redirect("/", 401);
  }
}
