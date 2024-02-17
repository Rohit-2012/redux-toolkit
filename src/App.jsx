import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Cart from "./components/Cart"
import Layout from "./components/Layout"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Dashboard />} />
    <Route path="cart" element={<Cart />} />
  </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
