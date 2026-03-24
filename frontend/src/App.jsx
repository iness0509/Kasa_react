import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/index_header";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
