// import React, { useEffect } from "react";
// import "../css/pic.css";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchThreeDPhoto } from "../redux/ThreeDimage/ThreeDslice";

// const HomePicRotate = () => {
//   const dispatch = useDispatch();
//   const { threeDphoto, loading, error } = useSelector(
//     (state) => state.threeDphoto
//   );
//   console.log("threeDphoto", threeDphoto);
//   useEffect(() => {
//     dispatch(fetchThreeDPhoto());
//   }, [dispatch]);

//   return (
//     <>
//       <div className="container my-5">
//         <div className="row">
//           <h2 className="text-center w-100 border-bottom-title addcolor">
//             Explore <span className="head-color">Gallery</span>
//           </h2>
//           <div className="col-lg-12">
//             <div className="div-center gallerys ">
//               <div id="carousels">
//                 <figure>
//                   <img src="/a.jpg" alt="Gallery Image 1" />
//                 </figure>
//                 <figure>
//                   <img src="/b.jpg" alt="Gallery Image 2" />
//                 </figure>
//                 <figure>
//                   <img src="/c.jpg" alt="Gallery Image 3" />
//                 </figure>
//                 <figure>
//                   <img src="/d.jpg" alt="Gallery Image 4" />
//                 </figure>
//                 <figure>
//                   <img src="/e.jpg" alt="Gallery Image 5" />
//                 </figure>
//                 <figure>
//                   <img src="/a.jpg" alt="Gallery Image 6" />
//                 </figure>
//                 <figure>
//                   <img src="/b.jpg" alt="Gallery Image 7" />
//                 </figure>
//                 <figure>
//                   <img src="/c.jpg" alt="Gallery Image 8" />
//                 </figure>
//                 <figure>
//                   <img src="/d.jpg" alt="Gallery Image 9" />
//                 </figure>
//                 <figure>
//                   <img src="/e.jpg" alt="Gallery Image 10" />
//                 </figure>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePicRotate;






// this is from fully backend code
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/pic.css";

const HomePicRotate = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/three/getallthreedimg"
        );
        if (response.data.success) {
          setData(response.data.gallery);
        } else {
          console.error("Failed to fetch data:", response.data.message);
          setError(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <h2 className="text-center w-100 border-bottom-title addcolor">
            Explore <span className="head-color">Gallery</span>
          </h2>
          <div className="col-lg-12">
            <div className="div-center gallerys">
              <div id="carousels" className="carousel-container">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && data.length > 0 && (
                    data.map((photo) => (
                      <figure key={photo._id} className="carousel-item">
                        <img
                          src={`${
                            import.meta.env.VITE_SERVERAPI
                          }/${photo.images[0].replace(/\\/g, "/")}`}
                          alt={`Gallery Image ${photo._id}`}
                          className="img-fluid"
                        />
                      </figure>
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePicRotate;


