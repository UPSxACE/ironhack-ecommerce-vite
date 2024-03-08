# Introduction
As part of the second module of the Ironhack bootcamp ("Creating a React App") we were requested to build a react app to showcase our knowledge. With a mock api, we have made a small e-commerce website in which we implemented basic functionalities.

This is one of two repositories involved in the project:
- [React Vite Frontend](https://github.com/UPSxACE/ironhack-ecommerce-vite)
- [Json Server Mock API](https://github.com/UPSxACE/ironhack-ecommerce-mockapi)

# Technologies & Libraries Used:
- React
- Vite
- Tailwind
- Shadcn Headless Component Library
- Axios
- Json server & auth server for the [mock api](https://github.com/UPSxACE/ironhack-ecommerce-mockapi)

# Features
- Responsive design
- Favouriting a product
- Adding product to the cart
- Searching for products
- Preview final price
- Login
- Register
- Admin route to manage the products

We have not implemented the buying workflow as it was not a requirement for the module, and it will be part of a future project.

# Setup
1. First follow the steps to setup the [mock api](https://github.com/UPSxACE/ironhack-ecommerce-mockapi).
2. Clone the repository.
3. Install the dependencies with `npm install`
4. Setup the `VITE_API_URL` environment variable with the __URL of the api__.
5. Setup the `VITE_STORE_OWNER_ID` environment variable with the __id of the account of owner of the store__ (use __VITE_STORE_OWNER_ID=1__ for testing, or create your own account in the api first).
6. Run the development server with `npm run dev`, or crrate the production build with `npm run build`.

# Team Members
This was a group exercise that I completed with Ioannis Tourtouras.
|<img alt="UPSxACE profile picture" src="https://avatars.githubusercontent.com/u/69174687?v=4" width="100px" height="100px" style="border-radius:100%">|<img alt="UPSxACE profile picture" src="https://avatars.githubusercontent.com/u/61120706?v=4" width="100px" height="100px" style="border-radius:100%">
|---------------|------------------|
|[Eduardo Botelho](https://github.com/UPSxACE)|[Ioannis Tourtouras](https://github.com/ioannistourtouras)|

