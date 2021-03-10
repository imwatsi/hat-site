import Navbar from "./Components/Nav";
import Home from "./Pages/Home";
import { AppProvider } from "./Context/appContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
