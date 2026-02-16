import { useState } from "react";
import "./App.css";

const DeleteBtn = ({ id, onConfirm }) => {
  return (
    <button onClick={() => onConfirm(id)}>Delete</button>
  );
};

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Create" },
    { id: 2, title: "Website" },
    { id: 3, title: "Frontend" }
  ]);

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirmed) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };
  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <DeleteBtn id={post.id} onConfirm={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
