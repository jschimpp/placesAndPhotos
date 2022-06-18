/* eslint-disable react/jsx-filename-extension */
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addPostAsync } from '../redux/postSlice';

function AddPostForm() {
  const [placeName, setPlaceName] = useState();
  const [photo, setPhoto] = useState();
  const [country, setCountry] = useState();
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    if (placeName && photo && country) {
      dispatch(
        addPostAsync({
          placeName,
          photo,
          country,
        }),
      );
    }
    setPlaceName('');
    setPhoto('');
    setCountry('');
  };

  return (
    <form>
      <p>
        Enter the name of a place, a web address to an image of that place,
        and the country the place is located in. Then press &quot;Submit.&quot;
      </p>
      <p>
        Place Name:
        <input
          value={placeName}
          onChange={(event) => { setPlaceName(event.target.value); }}
        />
      </p>
      <p>
        Photo:
        <input
          value={photo}
          onChange={(event) => { setPhoto(event.target.value); }}
        />
      </p>
      <p>
        Country:
        <input
          value={country}
          onChange={(event) => { setCountry(event.target.value); }}
        />
      </p>
      <button type="button" onClick={submit}>Submit</button>
    </form>
  );
}

export default AddPostForm;
