import { useEffect, useState } from "react";
import {
  getPosts,
  detailPost,
  deletePost,
  createPost,
} from "../services/apiService";

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

  const fetchPost = async (id) => {
    const post = await detailPost(id);
    setPosts(post);
    // console.log(post);
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
        <h1>Create Post</h1>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <br /> <br />
        <textarea onChange={(e) => setBody(e.target.value)}></textarea>
        <br /> <br />
        <button onClick={handleCreate}>Create</button>
      </div>


      <div>
        <h1>Blog Posts</h1>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h3>
                {post.id} . {post.title}
              </h3>
              {post.body}
              <button onClick={() => fetchPost(post.id)}>Detail</button>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
