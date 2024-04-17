import "./styles/main.scss";

import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Dashboard from "./components/Dashboard";
import { useSelector } from "react-redux";

function App() {
  const drawer = useSelector((state) => state.creative);

  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <section
          className="dashboard"
          style={{ overflowY: drawer.creatives.length > 1 ? "scroll" : "" }}
        >
          <Dashboard drawer={drawer.toggleDrawer} />
        </section>
        <section
          style={{ display: drawer.toggleDrawer ? "block" : "none" }}
          className="drawer"
        >
          <Drawer />
        </section>
      </main>
    </div>
  );
}

export default App;
