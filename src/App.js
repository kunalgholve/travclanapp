import React from 'react'

import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postLimit, setPostLimit] = useState(5);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(async () => {
    setLoading(true);
    const res = await fetch("https://intense-tor-76305.herokuapp.com/merchants");
    const jdata = await res.json();
    setData(jdata);
    setLoading(false);
   // console.log("data2", data);
  }, []);

  const lastIndex = currentPage * postLimit;
  const firstIndex = lastIndex - postLimit;
  const currentPosts = data.slice(firstIndex, lastIndex);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Table</h1>
      <Posts posts={currentPosts} loading={loading}  /> 
       <Pagination
       postsPerPage={postLimit}
       totalPosts={data.length} 
       paginate={paginate} 
       className="navbar fixed-bottom navbar-light bg-light"/>
      <br/><br/>
    </div>
  );
};

export default App;