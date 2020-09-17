import React from 'react';

const Uploading = () => {
  return (
    <div className="card uploading">
      <h2 className="uploading__title title">Uploading...</h2>
      <div className="loader">
        <div className="loader__bar"></div>
      </div>
    </div>
  );
};

export default Uploading;
