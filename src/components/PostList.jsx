import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/postListStore";
import WelcomeMesage from "./WelcomeMesage";
import { LoadingSpinner } from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList, fetching } = useContext(PostListContext);

  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomeMesage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {/* {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMesage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)} */}
    </>
  );
};

export const postLoader = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  return data.posts;
};

export default PostList;
