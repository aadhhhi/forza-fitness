/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { Trainers } from "./pages/Trainers";
import { Transformations } from "./pages/Transformations";
import { Memberships } from "./pages/Memberships";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programs" element={<Programs />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="transformations" element={<Transformations />} />
        <Route path="memberships" element={<Memberships />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
