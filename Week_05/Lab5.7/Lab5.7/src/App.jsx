import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const items = ["React", "JavaScript", "Tailwind"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="App">
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App
