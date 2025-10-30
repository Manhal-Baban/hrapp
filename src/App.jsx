import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <PersonList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
