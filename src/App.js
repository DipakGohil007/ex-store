import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
