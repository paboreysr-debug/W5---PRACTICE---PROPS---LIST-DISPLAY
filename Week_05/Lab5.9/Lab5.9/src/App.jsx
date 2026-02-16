import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([{ id: 1}, { id: 2}, { id: 3}]);
  const removeItem = (id) => {
    setList(list.filter(item => item.id !== id));
  }
  return (
    <div className="App">
      <h1>List of items</h1>
      {list.map(item => (
        <div key={item.id}>
          <span>Item {item.id}</span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}
export default App
