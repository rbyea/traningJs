import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({ id, posts }) => {
  const history = useHistory()

  const getPost = (id) => {
    return posts.find(el => el.id.toString() === id);
  }
  const post = getPost(id)

  const onHandleClick = () => {
    history.replace('/posts')
  }


  const renderContent = (post) => {
    return <> {post.label} <button onClick={onHandleClick}>Назад</button> </>
  }
  
  return (
    <div>
      <h1>
        {
          post ? renderContent(post) : `Не был найден пост с индификатором №${id}`
        }
      </h1>
    </div>
  );
};

export default Post;
