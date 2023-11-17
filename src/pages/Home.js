import React from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

const Home = (props) => {
  const { data, setData } = props

  return (
    <div>
      <Hero />
      <Movies data={data} setData={setData} />
    </div>
  );
};

export default Home;
