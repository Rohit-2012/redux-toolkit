import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const ascendingOrderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))
    
    const renderedPosts = ascendingOrderedPosts.map(post => (
        <article key={post.id} className='border border-black dark:border-white rounded-lg p-4'>
            <h3 className='font-bold text-2xl sm:text-3xl'>{ post.title }</h3>
            <p className='mt-2 text-xl'>{post.content.substring(0, 100)}</p>
            <p className='flex items-center justify-between'>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButtons post={post}/>
        </article>
    ))
  return (
      <section className='flex flex-col gap-4 p-4'>
          <h2 className='text-4xl font-bold font-serif'>Posts</h2>
          {renderedPosts}
    </section>
  )
}

export default PostsList
