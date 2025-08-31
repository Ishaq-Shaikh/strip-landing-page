import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Solutions from "./components/Solutions";
import Developers from "./components/Developers";
import Resources from "./components/Resources";
import Pricing from "./components/Pricing";
import Startnow from "./components/Startnow";
import Contactsales from "./components/Contactsales";
import Signin from "./components/Signin";
import RequesttoInvite from "./components/RequesttoInvite";
import Getstarted from "./components/Getstarted";
import Opens from "./components/Opens";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/startnow" element={<Startnow />} />
        <Route path="/contactsales" element={<Contactsales />} />
        <Route path="/requesttoinvite" element={<RequesttoInvite />} />
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/opens" element={<Opens />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
