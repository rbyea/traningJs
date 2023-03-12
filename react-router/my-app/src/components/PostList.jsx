import React from "react";
import { Link } from "react-router-dom";
import query from "query-string";

const PostList = ({ posts, location }) => {
  const [showOffer, setShowOffer] = React.useState(false);
  const search = query.parse(location.search);
  const { fromUrl, block } = search;
  console.log(fromUrl, block);
  React.useEffect(() => {
    if (!showOffer && fromUrl && block) {
      setShowOffer(!showOffer);
    }
  });
  return (
    <>
      {showOffer && `Сегодны скидка специально для тебя в 20%`}
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`posts/${post.id}`}>{post.label}</Link>
        </div>
      ))}
    </>
  );
};

export default PostList;
