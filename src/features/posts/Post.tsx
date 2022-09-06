import React, { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchPosts } from "./postSlice";

const Posts = () => {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => state.post);
  const getPosts = useCallback(async () => {
    await dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (post.loading) return <h1>Loading</h1>;
  if (!post.loading && post.error) return <h1>Error loading posts.</h1>;
  return (
    <>
      {post.posts.map((u) => (
        <div>
          <h3 key={u.id}>{u.title}</h3>
          <p>{u.body}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
