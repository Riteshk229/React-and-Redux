import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/postListStore";
import WelcomeMesage from "./WelcomeMesage";

const PostList = () => {
  const { postList, addInitalPosts } = useContext(PostListContext);
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitalPosts(data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMesage onGetPostClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
