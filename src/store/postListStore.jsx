import { createContext, useReducer } from "react";

const defaultPostList = [
  {
    id: "1",
    title: "Going to Bangalore",
    body: "Hi Friends, I am going to Bangalore  for my  job. Wish me Luck.",
    reactions: 2,
    userId: "user-69",
    tags: ["Bangalore", "Job"],
  },
  {
    id: "2",
    title: "B.Tech Completed",
    body: "I have completed my B.Tech in Chemical Engineering in 2021.",
    reactions: 12,
    userId: "user-1",
    tags: ["Graduated", "Eduction"],
  },
];

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    defaultPostList
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
        userId: userId,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };
  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
