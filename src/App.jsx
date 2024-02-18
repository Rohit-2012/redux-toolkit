import AddPostForm from "./features/posts/AddPostForm"
import PostsList from "./features/posts/PostsList"


function App() {

  return (
    <main className="w-full min-h-[100vh] bg-slate-300 dark:bg-black dark:text-white">
      <AddPostForm />
      <PostsList />
    </main>
  )
}

export default App
