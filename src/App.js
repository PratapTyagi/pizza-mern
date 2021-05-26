import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components";
import Home from "./screens/Home";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
