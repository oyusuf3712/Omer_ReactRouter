import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/style.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Invoices from "./pages/Invoices";
import ContactMe from "./pages/ContactMe";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Home />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="Invoices" element={<Invoices />} />
          <Route path="ContactMe" element={<ContactMe />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

