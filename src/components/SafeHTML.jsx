// import React from "react";
// import DOMPurify from "dompurify";

// const SafeHTML = ({ htmlString }) => {
//   const cleanHtmlString = DOMPurify.sanitize(htmlString);

//   return <div dangerouslySetInnerHTML={{ __html: cleanHtmlString }} />;
// };

// export default SafeHTML;


import React from 'react'
import DOMPurify from "dompurify";

const SafeHTML = ({ htmlString }) => {
   const cleanHtmlString = DOMPurify.sanitize(htmlString);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: cleanHtmlString }} />
    </>
  )
}

export default SafeHTML

