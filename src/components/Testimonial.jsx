import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const testimonialData = [
  {
    id: 1,
    title: "Excellent Education",
    description:
      "The teachers at Akshara School are fantastic! They have provided my child with the support and encouragement needed to excel academically .",
    image: "/team_1.jpg",
    name: "John Doe",
    post: "Parent",
    rating: 5,
  },
  {
    id: 2,
    title: "Caring Environment",
    description:
      "Akshara School offers a nurturing and safe environment. My daughter loves going to school every day, and as a parent, I couldn't be happier.",
    image: "/team_2.jpg",
    name: "Jane Smith",
    post: "Parent",
    rating: 5,
  },
  {
    id: 3,
    title: "Holistic Development",
    description:
      "Akshara School focuses on holistic development. My son is not only excelling in academics but also in extracurricular activities, thanks to the wonderful .",
    image: "/team_3.jpg",
    name: "Emily Johnson",
    post: "Parent",
    rating: 5,
  },
  {
    id: 4,
    title: "Supportive Community",
    description:
      "The school community is very supportive. The teachers and staff are always willing to help and provide the necessary resources for my child's success.",
    image: "/team_1.jpg",
    name: "Michael Brown",
    post: "Parent",
    rating: 5,
  },
  // Add more testimonials here
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};

const items = testimonialData.map((testimonial) => (
  <div className="item" key={testimonial.id}>
    <div className="testimonial">
      <h3 className="title">{testimonial.title}</h3>
      <p className="description">{testimonial.description}</p>
      <div className="testimonial-content">
        <div className="pic">
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className="content">
          <h4 className="name">{testimonial.name}</h4>
          <span className="post">{testimonial.post}</span>
          <ul className="rating">
            {Array(testimonial.rating)
              .fill()
              .map((_, index) => (
                <li className="fa fa-star" key={index} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
));

const Testimonial = () => {
  return (
    <>
      <div className="demo py-4">
        <div className="container">
          <h2 className="border-bottom-title w-100 text-center  head-color">
          <span className="addcolor">  Testimo</span>nial
          </h2>
          <div className="row d-flex justify-content-between align-items-center py-4">
            <AliceCarousel
              mouseTracking
              items={items}
              autoPlay={true}
              infinite={true}
              responsive={responsive}
              controlsStrategy="alternate"
              animationDuration="1500"
              disableButtonsControls={false}
              disableDotsControls={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;




// this is from backend fetch code ...done 


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

// const Testimonial = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_SERVERAPI}/api/v1/testimonial`
//         );
//         if (response.data.success) {
//           setTestimonials(response.data.testimonial);
//         } else {
//           console.error("Failed to fetch testimonials:", response.data.message);
//           setError(response.data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching testimonials:", error);
//         setError("Failed to load testimonials.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 2 },
//   };

//   const items = testimonials.map((testimonial) => (
//     <div className="item" key={testimonial._id}>
//       <div className="testimonial">
//         <h3 className="title">{testimonial.title}</h3>
//         <p className="description">{testimonial.feedback}</p>
//         <div className="testimonial-content">
//           <div className="pic">
//             <img
//               src={`${import.meta.env.VITE_SERVERAPI}/${testimonial.image.replace(/\\/g, "/")}`}
//               alt={testimonial.parentname}
           
//             />
//           </div>
//           <div className="content">
//             <h4 className="name">{testimonial.parentname}</h4>
//             <span className="post">Parent</span>
//             <ul className="rating">
//               {Array(testimonial.rating || 5)
//                 .fill()
//                 .map((_, index) => (
//                   <li className="fa fa-star" key={index} />
//                 ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   ));

//   if (loading) return <p>Loading testimonials...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <>
//       <div className="demo py-4">
//         <div className="container">
//           <h2 className="border-bottom-title w-100 text-center head-color">
//             <span className="addcolor">Testimo</span>nial
//           </h2>
//           <div className="row d-flex justify-content-between align-items-center py-4">
//             <AliceCarousel
//               mouseTracking
//               items={items}
//               autoPlay={true}
//               infinite={true}
//               responsive={responsive}
//               controlsStrategy="alternate"
//               animationDuration="1500"
//               disableButtonsControls={false}
//               disableDotsControls={true}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonial;

