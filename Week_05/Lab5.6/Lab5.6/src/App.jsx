import { useState } from 'react'
import './App.css'

function App() {
  const[posts, setPosts] = useState([]);
  const[newContent, setNewContent] = useState("");

  const handleAdd = () => {
    const newPost = {
      id: Date.now(),
      content: newContent
    };
    setPosts([...posts, newPost]);
    setNewContent("");
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <input type="text" value={newContent}onChange={(e) => setNewContent(e.target.value)} placeholder="Enter post content"/>
      <button onClick={handleAdd}>Add Post</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
