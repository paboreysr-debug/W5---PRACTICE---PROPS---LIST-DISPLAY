import './App.css'

const userData = {
  firstName: "Pa",
  lastName: "Borey",
  title: "Learning Frontend"
}
function User() {
  return (
    <div className="user-card">
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  )
}
export default function App() {
  return (
    <div className="container">
      <h1>WELCOME !!</h1>
      <p>PNV students are you ready to React Course? You got this 💪</p>
      <User />
    </div>
  )
}
