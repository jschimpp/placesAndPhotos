/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const getPostsAsync = createAsyncThunk(
  'posts/getPostsAsync',
  async () => {
    const resp = await fetch('http://localhost:8080/posts');
    if (resp.ok) {
      const posts = await resp.json();
      return { posts };
    }
  },
);

export const addPostAsync = createAsyncThunk(
  'posts/addPostAsync',
  async (payload) => {
    const resp = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        placeName: payload.placeName,
        photo: payload.photo,
        country: payload.country,
      }),
    });

    if (resp.ok) {
      const post = await resp.json();
      return { post };
    }
  },
);

export const editPhotoAsync = createAsyncThunk(
  'posts/editPhotoAsync',
  async (payload) => {
    const resp = await fetch(`http://localhost:8080/posts/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ photo: payload.newPhoto }),
    });

    if (resp.ok) {
      const post = await resp.json();
      return { post };
    }
  },
);

export const deletePostAsync = createAsyncThunk(
  'posts/deletePostAsync',
  async (payload) => {
    const resp = await fetch(`http://localhost:8080/posts/${payload.id}`, {
      method: 'DELETE',
    });

    if (resp.ok) {
      return { id: payload.id };
    }
  },
);

const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      const newPost = {
        id: nanoid(),
        placeName: action.payload.placeName,
        photo: action.payload.photo,
        country: action.payload.country,
      };
      state.push(newPost);
      console.log(state);
    },
    editPhoto: (state, action) => {
      const newPhoto = action.payload.newPhoto;
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].photo = newPhoto;
    },
    deletePhoto: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getPostsAsync.fulfilled]: (state, action) => {
      return action.payload.posts;
    },
    [addPostAsync.fulfilled]: (state, action) => {
      state.push(action.payload.post);
    },
    [editPhotoAsync.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (post) => post._id === action.payload.post._id,
      );
      state[index].photo = action.payload.post.photo;
      console.log(action.payload.post.photo);
    },
    [deletePostAsync.fulfilled]: (state, action) => {
      return state.filter((post) => post._id !== action.payload.id);
    },
  },
});

export const { addPost, editPhoto, deletePhoto } = postSlice.actions;
export default postSlice.reducer;
