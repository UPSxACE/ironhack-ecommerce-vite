export default async function logout() {
  localStorage.removeItem("accessToken");

  return Response.redirect("/", 302);
}
