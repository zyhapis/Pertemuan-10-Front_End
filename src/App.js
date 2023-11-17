import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Add from "./pages/Add";
import Layout from "./Layouts/Layout";
import { useState } from "react";
import DataMovie from "./utils/constants/DataMovie"

function App() {

  const [ data, setData ] = useState(DataMovie)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route path="/add" element={<Add data={data} setData={setData} />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </Layout>
  );
}

export default App;
