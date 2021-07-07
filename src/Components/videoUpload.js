import React, { useEffect, useState } from 'react';

function VideoUpload() {
  const [fileInput, setfileInput] = useState();
  const [prev, setprev] = useState(); // preview

  useEffect(() => {
    if (!fileInput) {
      setprev(undefined);
      return;
    }

    // console.log('input', fileInput);
    // console.log('preview', prev);

    const object = URL.createObjectURL(fileInput);
    setprev(object);

    return () => URL.revokeObjectURL(object);
  }, [fileInput]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setfileInput(undefined);
      return;
    }

    setfileInput(e.target.files[0]);
  };
  return (
    <div>
      <div className='card'>
        <p className='card-header'>Upload Image</p>
        <input
          type='file'
          onChange={onSelectFile}
          className='form-control-file m-2'
          id='inputImage'
        />
        {fileInput && (
          <video width='298' controls autoPlay muted>
            <source src={prev} />
          </video>
        )}
      </div>
    </div>
  );
}

export default VideoUpload;
