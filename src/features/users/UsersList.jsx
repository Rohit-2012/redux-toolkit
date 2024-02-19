import { useDispatch, useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import { Link } from "react-router-dom";
import { removeUser } from "./usersSlice";

const UsersList = () => {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeUser(id));
  };

  const table = <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  <thead className="text-lg text-black uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" className="px-6 py-3">
        S. No.
      </th>
      <th scope="col" className="px-6 py-3">
        Name
      </th>
      <th scope="col" className="px-6 py-3">
        Email
      </th>
      <th scope="col" className="px-6 py-3">
        Actions
      </th>
    </tr>
  </thead>
  <tbody>
    {state.map((user, index) => (
      <tr
        key={user.id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-lg"
      >
        <td className="px-6 py-4">{index + 1}</td>
        <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
        >
          {user.name}
        </td>
        <td className="px-6 py-4">{user.email}</td>
        <td className="px-6 py-4 flex items-center gap-4">
          <Link to={`update/${user.id}`} className="bg-blue-600 p-2 text-white rounded-md">
            <FaEdit />
          </Link>
          <button
            className="bg-red-600 p-2 text-white rounded-md"
            onClick={() => handleRemove(user.id)}
          >
            <MdDelete />
          </button>
        </td>
      </tr>
    ))}
  </tbody>
  </table>
  
  const emptyState = <h1 className="text-center w-full font-bold text-2xl text-slate-600">No Users Yet. Click on CREATE button to create a new user</h1>;

  return (
    <section className="w-full flex flex-col gap-4 items-start p-4">
      <Link
        to="create"
        className="bg-green-700 px-4 py-2 flex items-center gap-2 text-white font-bold text-xl rounded-md"
      >
        CREATE <TiUserAdd />
      </Link>
      {state.length > 0 ?  table : emptyState}
    </section>
  );
};

export default UsersList;
