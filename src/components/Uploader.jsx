import React from 'react';

import IconUploader from '../resources/images/image.svg';

const Uploader = () => {
  return (
    <div className="card uploader">
      <h1 className="uploader__title title">Upload your image</h1>
      <p className="uploader__description parragraph">
        File should be Jpeg, Png...
      </p>
      <div className="uploader__dragndrop">
        <img src={IconUploader} alt="uploader" />
      </div>
      <span className="uploader__or">Or</span>
      {/* <input type="file" accept="image/png, image/jpeg" className="button" /> */}
      <button className="uploader__button button">Choose a file</button>
    </div>
  );
};

export default Uploader;
