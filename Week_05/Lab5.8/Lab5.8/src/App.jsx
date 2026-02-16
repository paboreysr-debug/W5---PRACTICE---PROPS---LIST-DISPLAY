import { useState } from 'react';
import './App.css';
function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: "Hello", isEdited: false }
  ]);

  const markAsEdited = (id) => {
    setPosts(
      posts.map(post =>
        post.id === id
          ? { ...post, isEdited: !post.isEdited }
          : post
      )
    );
  };

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.text}</p>
          <p>{post.isEdited.toString()}</p>
          <button onClick={() => markAsEdited(post.id)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
export default App;
