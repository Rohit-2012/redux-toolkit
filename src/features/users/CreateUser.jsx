import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "./usersSlice";
import { Link, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";

const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    if (user.name && user.email) {
      dispatch(createUser(user));
      setUser({
        name: "",
        email: "",
      });
      navigate("..")
    }
  };

  return (
    <section className="flex justify-center items-center bg-slate-700 bg-opacity-70 h-[calc(100vh-2.8rem)]">
      <div className="bg-slate-50 p-5 rounded-lg shadow-md flex flex-col gap-4 sm:w-1/2 sm:h-1/2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold">Create a new user</h1>
          <Link to='..' className="font-bold text-2xl"><MdClose /></Link>
        </div>
        <form onSubmit={handleAddUser}>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="name" className="font-serif">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="New User"
              className="p-2 outline-none border border-blue-400 rounded-md"
              value={user.name}
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
              placeholder="new.user@placehorder.com"
              className="p-2 outline-none border border-blue-400 rounded-md"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <button className="border bg-green-600 px-4 py-1 text-white font-bold rounded-md">
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateUser;
