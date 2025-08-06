import React from "react";
import Giftsgrid from "../components/Giftsgrid";
import Searchbar from "../components/Searchbar";
//import Giftsgrid from "@/components/Giftsgrid";
//import Searchbar from "@/components/searchbar";

const Home = () => {
  const [query, setquery] = React.useState("happy");

  return (
    <div className='w-full max-w-4xl mx-auto text-center space-y-6 p-5'>
      <h1 className="text-3xl font-bold">giftymode</h1>
      <Searchbar query={query} setQuery={setquery} />

      <Giftsgrid query={query} />
    </div>
  );
};

export default Home;
