import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/index_header";
import Footer from "./components/footer/index_footer";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
       <Footer />
    </BrowserRouter>
  );
}
export default App;
