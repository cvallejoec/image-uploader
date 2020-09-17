import React, { useState, useEffect } from 'react';

import IconChecked from '../resources/images/check.svg';

const Uploaded = () => {
  const [link, setLink] = useState('');

  useEffect(() => {
    setLink(
      'https://murmuring-river-13090.herokuapp.com/api/uploader/image-1600364163873.jpeg'
    );
  }, []);

  return (
    <div className="card uploaded">
      <img src={IconChecked} alt="icon-checked" className="uploaded__checked" />
      <h2 className="title">Uploaded Successfully</h2>
      <div className="uploaded__image">
        <img src={link} alt="to-copy" />
      </div>
      <div className="uploaded__bottom">
        <p className="uploaded__link">{link}</p>
        <button className="button">Copy Link</button>
      </div>
    </div>
  );
};

export default Uploaded;
