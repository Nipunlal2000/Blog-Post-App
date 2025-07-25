import { useLocation } from "react-router-dom";

export default function PostDetail() {
  const { state } = useLocation();
  const post = state?.post;

  return (
    <div className="flex flex-col gap-5 p-7 m-10 bg-amber-100">
      <h1 className="text-3xl font-bold">Blog Detail</h1>
      {post ? (
        <>
          <h3 className="mt-3 font-bold text-xl">
            {post.id}. {post.title}
          </h3>
          <p className="mt-3">{post.body}</p>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}