import './App.css'
 const PostActions = ({ onlike, onShare }) => {
  return (
    <div>
      <button onClick={onlike}>Like</button>
      <button onClick={onShare}>Share</button>
    </div>
  )
}
// function App() {
//   const [count, setCount] = useState(0)
//   const handleLike = () => {
//     setCount(count + 1)
//   }
//   const handleShare = () => {
//     alert('Post shared!')
//   }
//   return (
//     <div className="App">
//       <h1>Post Title</h1>
//       <p>Write comment here..</p>
//       <PostActions onlike={handleLike} onShare={handleShare} />
//       <p>Likes: {count}</p>
//     </div>
//   )
// }
// function App() {
//   const handleLike = () => {
//     alert("Post liked!");
//   };

//   const handleShare = () => {
//     alert("Post shared!");
//   };

//   return (
//     <PostActions
//       onLike={handleLike}
//       onShare={handleShare}
//     />
//   );
// }
// function App() {
//   const handleLike = () => {
//     alert("Post liked!");
//   };

//   const handleShare = () => {
//     alert("Post shared!");
//   };

//   return (
//     <PostActions
//       onLike={handleLike}
//       onShare={handleShare}
//     />
//   );
// }
function App() {
  const handleLike = () => {
    alert("Post liked!");
  };

  const handleShare = () => {
    alert("Post shared!");
  };

  return (
    <PostActions
      onLike={handleLike}
      onShare={handleShare}
    />
  );
}

export default App;
