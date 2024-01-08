import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/postListStore";
import WelcomeMesage from "./WelcomeMesage";
import { LoadingSpinner } from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListContext);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMesage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
