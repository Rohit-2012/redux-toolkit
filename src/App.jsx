import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import CreateUser from "./features/users/CreateUser"
import UsersList from "./features/users/UsersList"
import RootLayout from "./components/RootLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={ <UsersList /> } />
      <Route path="create" element={ <CreateUser /> } />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
