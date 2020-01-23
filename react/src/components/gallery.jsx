 import React from "react"
 import '../css/body-page.css'
 import Content from "./gallerycontent";
 import Footer from "./galleryfooter";

 class Gallery extends React.Component {
    render() {
      return (
        <div>
        <Content />
        <Footer />  
    </div>
       
               

    );
    }
}



 export default Gallery
