import { HashRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router";
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

let router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },

  {
    path: "/products",
    element: (
      <div>
        <Navbar />
        <Products />
      </div>
    ),
  },

  {
    path: "/solutions",
    element: (
      <div>
        <Navbar />
        <Solutions />
      </div>
    ),
  },

  {
    path: "/developers",
    element: (
      <div>
        <Navbar />
        <Developers />
      </div>
    ),
  },

  {
    path: "/resources",
    element: (
      <div>
        <Navbar />
        <Resources />
      </div>
    ),
  },

  {
    path: "/pricing",
    element: (
      <div>
        <Navbar />
        <Pricing />
      </div>
    ),
  },

  {
    path: "/signin",
    element: (
      <div>
        <Navbar />
        <Signin />
      </div>
    ),
  },

  {
    path: "/startnow",
    element: (
      <div>
        <Navbar />
        <Startnow />
      </div>
    ),
  },

  {
    path: "/contactsales",
    element: (
      <div>
        <Navbar />
        <Contactsales />
      </div>
    ),
  },

  {
    path: "/requesttoinvite",
    element: (
      <div>
        <Navbar />
        <RequesttoInvite />
      </div>
    ),
  },

  {
    path: "/getstarted",
    element: (
      <div>
        <Navbar />
        <Getstarted />
      </div>
    ),
  },

  {
    path: "/opens",
    element: (
      <div>
        <Navbar />
        <Opens />
      </div>
    ),
  },

]);

function App() {
  return (
    <HashRouter>
      <RouterProvider router={router} />
    </HashRouter>
  );
}

export default App;
