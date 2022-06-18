/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import AddPostForm from './components/addPostForm';
import DisplayPosts from './components/displayPosts';

function App() {
  return (
    <div className="App">
      <h1>Places and Photos</h1>
      <AddPostForm />
      <DisplayPosts />
    </div>
  );
}

export default App;
