import './App.css'

function User(props) {
  return (
    <div className="user-card">
      <h2>
        {props.firstName} {props.lastName}
      </h2>
      <p>{props.title}</p>
    </div>
  )
}
export default function App() {
  const user1 = {
    firstName: "Pa",
    lastName: "Borey",
    title: "Student"
  }
  const user2 = {
    firstName: "Ann",
    lastName: "PengNy",
    title: "Student"
  }
  return (
    <div className="container">
      <h1>PNV REACT TEAM !!</h1>
      <p>Here are some PNV React masters, do you know them?</p>
      <User 
        firstName={user1.firstName}
        lastName={user1.lastName}
        title={user1.title}
      />

      <User 
        firstName={user2.firstName}
        lastName={user2.lastName}
        title={user2.title}
      />

    </div>
  )
}
