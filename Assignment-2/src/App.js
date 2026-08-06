import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="content">
        <h2>Home Page</h2>
        <p>
          Welcome to this React application. This page demonstrates how to use
          reusable components like a Header and Footer. React components make
          your code cleaner, reusable, and easier to maintain.
        </p>

        <p>
          You can now add more components such as Navbar, Sidebar, Cards, and
          Forms to build a complete website.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default App;