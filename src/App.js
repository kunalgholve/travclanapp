import React from 'react';

import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postLimit] = useState(5);
  const [ismax,setIsmax]=useState(true);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(async() => {
    setLoading(true);
    const res = await fetch("https://intense-tor-76305.herokuapp.com/merchants");
    const jdata = await res.json();
    const sortedData = jdata.map(record => {
      const bidData = record.bids;
      const totalBidAmount = bidData.reduce((acc, vis)=>{
        return acc += vis.amount;
      },0);

      return {
        ...record,
        total_bid_amount: totalBidAmount
      }
    }).sort((a,b) => a.total_bid_amount - b.total_bid_amount);

    setData(sortedData);
    setLoading(false);
  }, []);

  let totalbids=0;
  data.map((post)=>(totalbids=post.bids.reduce(function(a, b){
    return a.amount + b.amount;
  }, 0),
      post.total=totalbids),
    console.log("total:",totalbids));

  const lastIndex = currentPage * postLimit;
  const firstIndex = lastIndex - postLimit;
  const currentPosts = data.slice(firstIndex, lastIndex);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Table</h1>
      <Posts posts={currentPosts} loading={loading} ismax={ismax} setIsmax={setIsmax}  /> 
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