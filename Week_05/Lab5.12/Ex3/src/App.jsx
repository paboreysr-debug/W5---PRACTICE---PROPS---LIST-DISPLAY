import './App.css'
import { ALL_PNV_TEACHERS } from './teachers'

// Reusable User Component
function User({ firstName, lastName, title }) {
  return (
    <div className="user-card">
      <h2>{firstName} {lastName}</h2>
      <p>{title}</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="container">
      <h1>PNV TEAM !!</h1>
      <p>Here are some PNV trainers and educators, do you know them?</p>

      {/* Loop through teachers list */}
      {ALL_PNV_TEACHERS.map((teacher, index) => (
        <User
          key={index}
          firstName={teacher.firstName}
          lastName={teacher.lastName}
          title={teacher.title}
        />
      ))}
    </div>
  )
}
