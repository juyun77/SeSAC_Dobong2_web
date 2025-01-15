import axios from "axios";
import { useEffect, useState } from "react";

export default function PracticeScss3() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(response.data);
    setPosts(response.data.slice(0, 10));
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="PostList">
      <header>Post List</header>
      {posts.length === 0 ? (
        <span>...loading...</span>
      ) : (
        posts.map((post) => {
          return (
            <div className="PostItem">
              <div>
                <span className="id">No {post.id}</span>
                <span className="title">{post.title}</span>
              </div>
              <p className="body">{post.body}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
