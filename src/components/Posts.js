import React from "react";
import * as ReactBootStrap from 'react-bootstrap';

const Posts = ({ posts, loading , ismax , setIsmax }) => {

    if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
        <ReactBootStrap.Table striped bordered hover variant="dark">
    <thead>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Premium</th>
        <th>{ismax?<h5>MaxBids</h5>:<h5>MinBids</h5>}<button type="button" onClick={()=>setIsmax(!ismax)}>toggle</button> </th>
        <th>Total Bid Amount(sorted)</th>  
        </tr>
    </thead>
        <tbody>
        {
        posts.map((post)=>(

            <tr key="post.id"> 
                <>
                    <td>{post.firstname}<img src={post.avatarUrl}/></td>
                    <td>{post.email}  </td>
                    <td>{post.phone}</td>
                    <td>{post.hasPremium ? "YES":"NO" }</td>
                    <td>{ ismax ?  post.bids.length>0 ? Math.max.apply(Math, post.bids.map(function(o) { return o.amount })):0 
                                :  post.bids.length>0 ? Math.min.apply(Math, post.bids.map(function(o) { return o.amount })):0
                        } 
                    </td>
                    <td>
                        {post.total_bid_amount}
                    </td>
                </>
            </tr>)
        )
        }

    </tbody>
        </ReactBootStrap.Table> 
    </div>
  )
};

export default Posts;