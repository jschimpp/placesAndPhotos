/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsAsync } from '../redux/postSlice';
import Post from './post';

function DisplayPosts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  return (
    <div>
      {posts.map((item) => (
        <Post
          id={item._id}
          placeName={item.placeName}
          photo={item.photo}
          country={item.country}
        />
      ))}
    </div>
  );
}

export default DisplayPosts;
