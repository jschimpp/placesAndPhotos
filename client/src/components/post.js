/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePostAsync } from '../redux/postSlice';
import Edit from './edit';
import './post.css';

function Post({
  placeName, photo, country, id,
}) {
  const dispatch = useDispatch();
  const [newPhoto] = useState();
  const handleDeleteClick = () => {
    dispatch(deletePostAsync({ id }));
  };

  return (
    <div className="entry">
      <h3>{placeName}</h3>
      <p>
        Country:
        &nbsp;
        {country}
      </p>
      <img src={photo} alt="" />
      <div><Edit id={id} newPhoto={newPhoto} /></div>
      <div><button type="button" onClick={handleDeleteClick}>Delete Entry</button></div>
    </div>
  );
}

export default Post;
