import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostListContext } from "../store/postListStore";
import WelcomeMesage from "./WelcomeMesage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMesage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
