import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    id: "",
    title: "",
    content: "",
    userId: "",
  });

  const users = useSelector(selectAllUsers);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const canSave =
    Boolean(post.title) && Boolean(post.content) && Boolean(post.userId);

  const handleSavePost = (e) => {
    e.preventDefault();
    if (post.title.trim() && post.content.trim()) {
      dispatch(postAdded(post));
      setPost({
        id: "",
        title: "",
        content: "",
        userId: ''
      });
    }
  };

  const usersOption = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="flex flex-col gap-4 p-4">
      <h2 className="font-bold text-3xl font-serif sm:text-4xl">
        Add a new post
      </h2>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="postAuthor" className="font-bold text-xl">
            Author:
          </label>
          <select
            name="userId"
            id="postAuthor"
            value={post.userId}
            onChange={handleChange}
            className="rounded-md outline-none p-2"
          >
            <option value=""></option>
            {usersOption}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="postTitle" className="font-bold text-xl">
            Title:
          </label>
          <input
            type="text"
            id="postTitle"
            name="title"
            value={post.title}
            onChange={handleChange}
            className="outline-none p-2 text-black rounded-md"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="postContent" className="font-bold text-xl">
            Content:
          </label>
          <textarea
            name="content"
            id="postContent"
            value={post.content}
            onChange={handleChange}
            className="outline-none p-2 text-black rounded-md"
          ></textarea>
        </div>
        {canSave ?
          <button
          className="border p-2 bg-green-700 text-white font-bold text-xl rounded-md cursor-pointer sm:w-40"
          type="submit"
          onClick={handleSavePost}
        >
          Save Post
          </button>
        : <button
          className="p-2 bg-green-500 text-slate-300 font-bold text-xl rounded-md sm:w-40 cursor-not-allowed"
          type="submit"
          onClick={handleSavePost}
          disabled
        >
          Save Post
          </button>}
      </form>
    </section>
  );
};

export default AddPostForm;
