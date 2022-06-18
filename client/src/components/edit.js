/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPhotoAsync } from '../redux/postSlice';
import './post.css';

function Edit({ id }) {
  const dispatch = useDispatch();
  const [newPhoto, setNewPhoto] = useState();
  const [editMode, setEditMode] = useState(false);
  const submitPhotoEdit = (event) => {
    event.preventDefault();
    dispatch(
      editPhotoAsync({
        id,
        newPhoto,
      }),
    );
    setNewPhoto('');
    setEditMode(false);
  };
  if (editMode === false) {
    return (<button type="button" onClick={() => { setEditMode(true); }}>Edit Photo</button>);
  }
  return (
    <form>
      <input
        value={newPhoto}
        onChange={(event) => setNewPhoto(event.target.value)}
      />
      <button type="button" onClick={submitPhotoEdit}>Submit New Photo</button>
    </form>
  );
}

export default Edit;
