// import React ,{ useEffect } from "react";
// import '../css/banner.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchHeroPhoto } from './../redux/Hero/HeroSlice';

// const carouselData = [
//   {
//     id: 5,
//     image: "/c.jpg",
//     title: "Engaging and interactive learning experiences",
//   },
//   {
//     id: 4,
//     image: "/y.jpg",
//     title: "Engaging and interactive learning experiences",
//   },
//   {
//     id: 0,
//     image: "/selected/home3.webp",
//     title: "Exploring new horizons and growing knowledge",
//   },

//   {
//     id: 2,
//     image: "/selected/home55.webp",
//     title: "Fostering creativity and independent learning",
//   },

//   {
//     id: 3,
//     image: "/x.jpg",
//     title: "Exploring new horizons and growing knowledge",
//   },
// ];

// const Banner = () => {
//   const dispatch = useDispatch();
//   const { herophoto, loading, error } = useSelector((state) => state.herophoto);
//   console.log('herophoto', herophoto)
//   useEffect(() => {
//     dispatch(fetchHeroPhoto());
//   }, [dispatch]);

// //   <div>
// //   {loading && <p>Loading...</p>}
// //   {error && <p>Error: {error}</p>}
// //   {!loading && !error && herophoto.length > 0 && (
// //     <div>
// //       {herophoto.map((photo) => (
// //         <img key={photo._id} src={photo.url} alt="Hero" />
// //       ))}
// //     </div>
// //   )}
// // </div>

//   return (
//     <>

//       <section className="home ">
//         <div id="carousel" className="carousel slide" data-bs-ride="carousel">
//           <div className="carousel-controls">
//             <ol className="carousel-indicators">
//               {carouselData.map((item, index) => (
//                 <li
//                   key={item.id}
//                   data-bs-target="#carousel"
//                   data-bs-slide-to={index}
//                   className={index === 0 ? "active" : ""}
//                   style={{ backgroundImage: `url(${item.image})` }}
//                 />
//               ))}
//             </ol>

//             <a
//               className="carousel-control-prev"
//               href="#carousel"
//               role="button"
//               data-bs-slide="prev"
//             >
//               <img src="/left-arrow.svg" alt="Prev" />
//             </a>
//             <a
//               className="carousel-control-next"
//               href="#carousel"
//               role="button"
//               data-bs-slide="next"
//             >
//               <img src="/right-arrow.svg" alt="Next" />
//             </a>
//           </div>

//           <div className="carousel-inner">
//             {carouselData.map((item, index) => (
//               <div
//                 key={item.id}
//                 className={`carousel-item  im ${index === 0 ? "active" : ""}`}
//                 style={{ backgroundImage: `url(${item.image})` }}
//               >
//                 {/* <div className="container">
//                   <p className=" px-4 fs-5"> Playgroup to Grade 10</p>
//                 </div> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Banner;

import React, { useEffect } from "react";
import "../css/banner.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroPhoto } from "./../redux/Hero/HeroSlice";

const Banner = () => {
  const dispatch = useDispatch();
  const { herophoto, loading, error } = useSelector((state) => state.herophoto);

  useEffect(() => {
    dispatch(fetchHeroPhoto());
  }, [dispatch]);

  return (
    <>
      <section className="home">
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-controls">
            <ol className="carousel-indicators">
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error}</p>}
              {!loading &&
                !error &&
                herophoto.Heros &&
                herophoto.Heros.length > 0 &&
                herophoto.Heros.map((item, index) => (
                  <li
                    key={item._id}
                    data-bs-target="#carousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    style={{
                      backgroundImage: `url(http://localhost:5000/${item.images.replace(
                        /\\/g,
                        "/"
                      )})`,
                    }}
                  />
                ))}
            </ol>

            <a
              className="carousel-control-prev"
              href="#carousel"
              role="button"
              data-bs-slide="prev"
            >
              <img src="/left-arrow.svg" alt="Prev" />
            </a>
            <a
              className="carousel-control-next"
              href="#carousel"
              role="button"
              data-bs-slide="next"
            >
              <img src="/right-arrow.svg" alt="Next" />
            </a>
          </div>

          <div className="carousel-inner">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading &&
              !error &&
              herophoto.Heros &&
              herophoto.Heros.length > 0 &&
              herophoto.Heros.map((item, index) => (
                <div
                  key={item._id}
                  className={`carousel-item im ${index === 0 ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(http://localhost:5000/${item.images.replace(
                      /\\/g,
                      "/"
                    )})`,
                  }}
                ></div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
