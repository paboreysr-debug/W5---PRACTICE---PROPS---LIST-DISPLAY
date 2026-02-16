import "./App.css";

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      {/* Navigation bar */}
      <nav className="navbar">
        <h2>My App</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      {/* Main content */}
      <main className="main-content">{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
