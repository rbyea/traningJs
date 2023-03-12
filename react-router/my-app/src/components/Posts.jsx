import React from "react";
import PostList from "./PostList";
import Post from "./Post"
import { useParams } from "react-router-dom";

const Posts = ({ location }) => {
  const params = useParams()

  const posts = [
    {id: 1, label: "Пост 1"},
    {id: 2, label: "Пост 2"},
    {id: 3, label: "Пост 3"}
  ]

  const { postId } = params;
  return (
    <>
      <h1>Posts</h1>
      {
        postId 
          ? <Post posts={posts} id={postId}/> 
          : <PostList location={location} posts={posts} /> 
      } 
    </>   
  )
};

export default Posts;
