import "./App.css";

const Postimage = ({ url }) => {
  if (!url) {
    return (
      <div
        className="image-placeholder"
        style={{ backgroundColor: "gray", width: "300px", height: "200px" }}
      ></div>
    );
  }
  return (
    <div className="img-wrapper">
      <img src={url} alt="Post image" className="post-image" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Post Image </h1>
      <Postimage url={null} />
      <Postimage url="https://th.bing.com/th/id/OIF.xaZaKzpDbJlKVdBmlZ585Q?w=317&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" />
    </div>
  );
}

export default App;
