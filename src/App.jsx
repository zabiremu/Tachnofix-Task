import { BrowserRouter } from "react-router-dom";
import CardDetails from "./components/CardDetails/CardDetails";
import HomePage from "./page/HomePage";
import Nav from "./router/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </>
  );
}

export default App;
