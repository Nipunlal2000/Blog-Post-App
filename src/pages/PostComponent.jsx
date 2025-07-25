import { useEffect, useState } from "react";
import {
  getPosts,
  detailPost,
  deletePost,
  createPost,
} from "../services/apiService";
import { Link } from "react-router-dom";

export default function PostComponent() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const posts = await getPosts();
    setPosts(posts);
    // console.log(posts);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter((post) => post.id !== id));
    console.log("deleted");

    // fetchPosts();
  };

  const handleCreate = async () => {
    if (!title || !body) {
      alert("Please enter title and body");
      return;
    }
    const newPost = { title, body, userId: 1 };
    const post = await createPost(newPost);
    setPosts([...posts, post]);
    setTitle("");
    setBody("");
    console.log(post);
  };

  return (
    <div>
      <div>
        <div className="flex flex-col gap-5 p-7 m-10 ">
          <h1 className="text-3xl font-bold">Add Blog</h1>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Blog title"
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <label>Body</label>
          <textarea
            placeholder="Enter Blog body"
            onChange={(e) => setBody(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          ></textarea>

          <button
            onClick={handleCreate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-7 m-10 ">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className=" border bg-amber-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <div>
                <h3 className="text-xl font-bold">
                  {post.id} . <span className="text-lg capitalize">{post.title}</span>
                </h3>
                <h5 className="text-sm  my-3 ">{post.body}</h5>
              </div>

              <div className="flex gap-3 ">
                <Link
                  to={`/api/${post.id}`}
                  state={{ post }}
                  className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </Link>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
