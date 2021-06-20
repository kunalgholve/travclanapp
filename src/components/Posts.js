import React from "react";
import * as ReactBootStrap from 'react-bootstrap';

const Posts = ({ posts, loading }) => {
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
      <th>Max/Min Bid</th>
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
             </>
        </tr>
      )
      )
    }
  </tbody>
</ReactBootStrap.Table> 
    </div>
  )
};

export default Posts;