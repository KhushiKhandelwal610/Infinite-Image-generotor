import React from 'react'
import  { useState, useEffect } from 'react';
import './InfiniteImageGenerator.css';
// import FullViewImage from './FullViewImage';
;
// import React, { useState, useEffect } from 'react';


const InfiniteImageGenerator = () => {
  const [imageCount, setImageCount] = useState(20);
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = () => {
      const newImageList = [];

      for (let i = 1; i <= imageCount; i++) {
        newImageList.push(`http://via.placeholder.com/200x200?text=${i}`);
      }

      setImageList(newImageList);
    };

    fetchImages();
  }, [imageCount]);

  const handleLoadMore = () => {
    setImageCount(imageCount + 30);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
   
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const handleDownloadImage = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = selectedImage;
    downloadLink.download = `image_${imageCount}.png`;
    downloadLink.click();
  };
  window.addEventListener("scroll", handleLoadMore);

  return (
    <div>
      <h1 className='heading'>Get Infinite Images</h1>
      <div id="image-container">
        {imageList.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(imageUrl) 
            
            }
            
          />
          
          
        ))}

      </div>
      {selectedImage && (
        <div className="image-modal">
          <div className="modal-content">
            <img src={selectedImage} alt="Full-size Image" />
            <div className="modal-buttons">
              <button onClick={handleDownloadImage}>Download</button>
              <button onClick={handleCloseImage}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfiniteImageGenerator;



 
//     const [imageCount, setImageCount] = useState(30);
//   const [imageList, setImageList] = useState([]);
//   // const [image, getimage]=useState(null)

//   useEffect(() => {
//     const fetchImages = () => {
//       const newImageList = [];
      
//       for (let i = 1; i <= imageCount; i++) {
//         newImageList.push(`http://via.placeholder.com/200x200?text=${i}`);
//       }

//       setImageList(newImageList);
//     };
    
//     fetchImages();
//   }, [imageCount]);
  
//   const handleLoadMore = () => {
//     setImageCount(imageCount + 30);
//   };

// //   function fullview(index){

// //     document.getElementById("fullimage").src=index
// //    document.getElementById("FullimageView").style.display="block"

// // }

  

  
//   window.addEventListener("scroll", handleLoadMore);
//   return (
//     <div>
//       <h1 className='heading'>Get Your Images</h1>
//       <div className="image-container">
//         {imageList.map((imageUrl, index) => (
//           <img key={index} src={imageUrl} alt={`Image ${index + 1}`}  />
//         ))}
//       </div>
//       {/* <div id='FullimageView'>
//         <img   id='fullimage' alt="error" />
//         <span id='clossButton'>&times;</span>
//     </div> */}
//       {/* <button onClick={handleLoadMore}>Load More Images</button> */}
//     </div>
//   );
// };

  


// export default InfiniteImageGenerator 