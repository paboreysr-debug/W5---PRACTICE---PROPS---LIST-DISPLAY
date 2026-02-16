export default function Card({ item }) {
  return (
    <li className="user-card">
      <img src={item.image} alt={item.name} />
      <div className="card-info">
        <h2>{item.name}</h2>
        <p className="class-name">{item.class}</p>
        <p className="Speed"><i>{item.speed}</i></p>
      </div>
    </li>
  );
}