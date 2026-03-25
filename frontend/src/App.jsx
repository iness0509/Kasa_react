import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/index_header";
import Footer from "./components/footer/index_footer";
import Home from "./pages/home";
import About from "./pages/about";
import Apartment from "./pages/apartment";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/apartment/:id" element={<Apartment />} />
        </Routes>
      </main>
       <Footer />
    </BrowserRouter>
  );
}
export default App;
