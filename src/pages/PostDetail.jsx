import { useLocation } from "react-router-dom";

export default function PostDetail() {
  // Get the post data passed from the Link
  const { state } = useLocation();
  const post = state?.post;

  return (
    <div>
      <h1>Blog Detail</h1>
      {post ? (
        <>
          <h3>
            {post.id}. {post.title}
          </h3>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}