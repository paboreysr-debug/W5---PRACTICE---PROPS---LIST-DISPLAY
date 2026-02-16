import { AVAILABLE_PLACES } from './data.js';
import Place from './Place.jsx';
import './App.css'

function App() {
  return (
    <div id="app">
      <header>
        <h1>PLACEPICKER</h1>
        <p>Where would you like to go?</p>
      </header>
      <main>
        <section className="places-category">
          <ul className="places">
            {AVAILABLE_PLACES.map((place) => (
              <Place key={place.id} place={place} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;