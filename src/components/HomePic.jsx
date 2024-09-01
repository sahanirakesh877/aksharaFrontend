import React,{useEffect} from "react";
import "../css/pic.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchThreeDPhoto } from "../redux/ThreeDimage/ThreeDslice";

const HomePic = () => {


  const dispatch = useDispatch();
  const { threeDphoto, loading, error } = useSelector((state) => state.threeDphoto);
  console.log('threeDphoto', threeDphoto)
  useEffect(() => {
    dispatch(fetchThreeDPhoto());
  }, [dispatch]);



// yo code tala haldine
//   <div>
//   {loading && <p>Loading...</p>}
//   {error && <p>Error: {error}</p>}
//   {!loading && !error && threeDphoto.length > 0 && (
//     <div>
//       {threeDphoto.map((photo) => (
//         <img key={photo._id} src={photo.images} alt="3D Gallery" />
//       ))}
//     </div>
//   )}
// </div>

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <h2 className="text-center w-100 border-bottom-title addcolor">
            Explore <span className="head-color">Gallery</span>
          </h2>
          <div className="col-lg-12">
            <div className="div-center gallerys ">
              <div id="carousels">
                <figure>
                  <img src="/a.jpg" alt="Gallery Image 1" />
                </figure>
                <figure>
                  <img src="/b.jpg" alt="Gallery Image 2" />
                </figure>
                <figure>
                  <img src="/c.jpg" alt="Gallery Image 3" />
                </figure>
                <figure>
                  <img src="/d.jpg" alt="Gallery Image 4" />
                </figure>
                <figure>
                  <img src="/e.jpg" alt="Gallery Image 5" />
                </figure>
                <figure>
                  <img src="/a.jpg" alt="Gallery Image 6" />
                </figure>
                <figure>
                  <img src="/b.jpg" alt="Gallery Image 7" />
                </figure>
                <figure>
                  <img src="/c.jpg" alt="Gallery Image 8" />
                </figure>
                <figure>
                  <img src="/d.jpg" alt="Gallery Image 9" />
                </figure>
                <figure>
                  <img src="/e.jpg" alt="Gallery Image 10" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePic;
