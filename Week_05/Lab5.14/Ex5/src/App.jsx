import { USERS_DATA } from './data.js';
import Card from './Card.jsx';
import './App.css';

function App() {
  return (
    <div id="app">
      <h1>List of Supersport Cars</h1>
      <main>
        <ul className="card-list">
          {USERS_DATA.map((user) => (
            <Card key={user.id} item={user} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;