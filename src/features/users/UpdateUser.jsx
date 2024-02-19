import { Link, useNavigate, useParams } from "react-router-dom"
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "./usersSlice";


const UpdateUser = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    const {id} = useParams(['id'])
    const currentUser = users.filter(user => user.id === id)[0]

    const [updatedUser, setUpdatedUser] = useState(currentUser)

    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatedUser((prevUser) => ({ ...prevUser, [name]: value }));
    };
    
    const handleUpdate = (event) => {
        event.preventDefault()
        dispatch(updateUser(updatedUser))
        navigate('..')
    }

  return (
    <section className="flex justify-center items-center bg-slate-700 bg-opacity-70 h-[calc(100vh-2.8rem)]">
      <div className="bg-slate-50 p-5 rounded-lg shadow-md flex flex-col gap-4 sm:w-1/2 sm:h-1/2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold">Update user</h1>
          <Link to='..' className="font-bold text-2xl"><MdClose /></Link>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="name" className="font-serif">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 outline-none border border-blue-400 rounded-md"
              value={updatedUser.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="email" className="font-serif">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 outline-none border border-blue-400 rounded-md"
              value={updatedUser.email}
              onChange={handleChange}
            />
          </div>
          <button className="border bg-green-600 px-4 py-1 text-white font-bold rounded-md">
            Update
          </button>
        </form>
      </div>
    </section>
  )
}

export default UpdateUser
