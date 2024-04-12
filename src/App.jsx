import "./styles/main.scss";

import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <section className="dashboard">
          <Dashboard />
        </section>
        <section className="drawer">
          <Drawer />
        </section>
      </main>
    </div>
  );
}

export default App;
